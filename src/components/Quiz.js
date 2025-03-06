import { Form, Button, Alert } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";

const Quiz = ({ quiz, onComplete, answers, setAnswers }) => {
  const handleChange = (questionIdx, value) => {
    setAnswers((prev) => ({ ...prev, [questionIdx]: value }));
  };

  const handleSubmit = () => {
    const resultArray = quiz.map((q, idx) =>
      answers[idx] === q.answer ? "Correct" : "Incorrect"
    );

    // Check if all answers are correct
    const allCorrect = resultArray.every((res) => res === "Correct");

    if (allCorrect) {
      onComplete(); // Mark lesson complete when all answers are correct
    }

    setAnswers((prev) => ({ ...prev, results: resultArray }));
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
                  checked={answers[idx] === option}
                  onChange={(e) => handleChange(idx, e.target.value)}
                  label={<label htmlFor={inputId}>{option}</label>}
                />
              );
            })}
          </Form>
          {answers.results && (
            <Alert
              variant={
                answers.results[idx] === "Correct" ? "success" : "danger"
              }
              className="mt-2"
            >
              {answers.results[idx]}
            </Alert>
          )}
        </div>
      ))}
      <Button variant="success" onClick={handleSubmit}>
        <FontAwesomeIcon icon={faCheckCircle} className="me-2" />
        Submit All Answers
      </Button>
      {answers.results && answers.results.every((res) => res === "Correct") && (
        <Alert variant="success" className="mt-3">
          🎉 All answers are correct! Lesson marked as completed.
        </Alert>
      )}
    </div>
  );
};

export default Quiz;
