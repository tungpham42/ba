import { useParams, useNavigate } from "react-router-dom";
import { Container, Button } from "react-bootstrap";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faArrowLeft,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";
import lessons from "../data/lessons";
import Quiz from "../components/Quiz";
import ProgressTracker from "../components/ProgressTracker";

const LessonPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const lessonId = parseInt(id);

  const lessonIndex = lessons.findIndex((l) => l.id === lessonId);
  const lesson = lessons[lessonIndex];

  const [completedLessons, setCompletedLessons] = useState(() => {
    const saved = localStorage.getItem("completedLessons");
    return saved ? JSON.parse(saved) : [];
  });

  const [quizAnswers, setQuizAnswers] = useState({});

  useEffect(() => {
    localStorage.setItem("completedLessons", JSON.stringify(completedLessons));
  }, [completedLessons]);

  const markLessonComplete = () => {
    if (!completedLessons.includes(lessonId)) {
      setCompletedLessons((prev) => [...prev, lessonId]);
    }
  };

  const handleNavigation = (lessonId) => {
    setQuizAnswers({}); // Clear answers
    navigate(`/lesson/${lessonId}`);
  };

  if (!lesson) {
    return (
      <Container className="my-3">
        <h2>Lesson not found</h2>
        <Button variant="primary" onClick={() => navigate("/")}>
          <FontAwesomeIcon icon={faHome} className="me-2" />
          Back to Home
        </Button>
      </Container>
    );
  }

  return (
    <Container className="my-3">
      <h2>{lesson.title}</h2>
      <ProgressTracker
        completed={completedLessons.length}
        total={lessons.length}
      />

      <div className="my-4 d-flex justify-content-between">
        <Button
          variant="secondary"
          onClick={() => handleNavigation(lessons[lessonIndex - 1].id)}
          disabled={lessonIndex === 0}
        >
          <FontAwesomeIcon icon={faArrowLeft} className="me-2" />
          Previous
        </Button>

        <Button variant="primary" onClick={() => navigate("/")}>
          <FontAwesomeIcon icon={faHome} className="me-2" />
          Home
        </Button>

        <Button
          variant="secondary"
          onClick={() => handleNavigation(lessons[lessonIndex + 1].id)}
          disabled={lessonIndex === lessons.length - 1}
        >
          Next
          <FontAwesomeIcon icon={faArrowRight} className="ms-2" />
        </Button>
      </div>

      <div dangerouslySetInnerHTML={{ __html: lesson.content }} />
      <Quiz
        quiz={lesson.quiz}
        onComplete={markLessonComplete}
        answers={quizAnswers}
        setAnswers={setQuizAnswers}
      />

      <div className="mt-4 d-flex justify-content-between">
        <Button
          variant="secondary"
          onClick={() => handleNavigation(lessons[lessonIndex - 1].id)}
          disabled={lessonIndex === 0}
        >
          <FontAwesomeIcon icon={faArrowLeft} className="me-2" />
          Previous
        </Button>

        <Button variant="primary" onClick={() => navigate("/")}>
          <FontAwesomeIcon icon={faHome} className="me-2" />
          Home
        </Button>

        <Button
          variant="secondary"
          onClick={() => handleNavigation(lessons[lessonIndex + 1].id)}
          disabled={lessonIndex === lessons.length - 1}
        >
          Next
          <FontAwesomeIcon icon={faArrowRight} className="ms-2" />
        </Button>
      </div>
    </Container>
  );
};

export default LessonPage;
