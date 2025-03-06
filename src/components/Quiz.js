import { useState } from "react";
import { Form, Button, Alert } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";

const Quiz = ({ quiz, onComplete }) => {
  const [answers, setAnswers] = useState({});
  const [results, setResults] = useState(null);
  const [allCorrect, setAllCorrect] = useState(false);

  const handleChange = (questionIdx, value) => {
    setAnswers((prev) => ({ ...prev, [questionIdx]: value }));
  };

  const handleSubmit = () => {
    const resultArray = quiz.map((q, idx) =>
      answers[idx] === q.answer ? "Correct" : "Incorrect"
    );
    setResults(resultArray);

    // Check if all answers are correct
    const isAllCorrect = resultArray.every((res) => res === "Correct");
    setAllCorrect(isAllCorrect);

    // If all answers are correct, trigger lesson completion
    if (isAllCorrect) {
      onComplete(); // Ensure progress only updates here
    }
  };

  return (
    <div>
      {quiz.map((q, idx) => (
        <div key={idx} className="mb-4">
          <h4>{q.question}</h4>
          <Form>
            {q.options.map((option, optIdx) => {
              const inputId = `quiz-${idx}-option-${optIdx}`;
              return (
                <Form.Check
                  key={optIdx}
                  type="radio"
                  id={inputId}
                  name={`quiz-${idx}`}
                  value={option}
                  onChange={(e) => handleChange(idx, e.target.value)}
                  label={<label htmlFor={inputId}>{option}</label>}
                />
              );
            })}
          </Form>
          {results && (
            <Alert
              variant={results[idx] === "Correct" ? "success" : "danger"}
              className="mt-2"
            >
              {results[idx]}
            </Alert>
          )}
        </div>
      ))}
      <Button variant="success" onClick={handleSubmit}>
        <FontAwesomeIcon icon={faCheckCircle} className="me-2" />
        Submit All Answers
      </Button>
      {results && allCorrect && (
        <Alert variant="success" className="mt-3">
          🎉 All answers are correct! Lesson marked as completed.
        </Alert>
      )}
    </div>
  );
};

export default Quiz;
