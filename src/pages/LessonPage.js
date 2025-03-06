import { useParams, useNavigate } from "react-router-dom";
import { Container, Button } from "react-bootstrap";
import { useMemo, useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import lessons from "../data/lessons";
import Quiz from "../components/Quiz";
import ProgressTracker from "../components/ProgressTracker";

const LessonPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const lessonId = parseInt(id);

  const lesson = useMemo(
    () => lessons.find((l) => l.id === lessonId),
    [lessonId]
  );

  const [completedLessons, setCompletedLessons] = useState(() => {
    const saved = localStorage.getItem("completedLessons");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem("completedLessons", JSON.stringify(completedLessons));
  }, [completedLessons]);

  const markLessonComplete = () => {
    if (!completedLessons.includes(lessonId)) {
      setCompletedLessons([...completedLessons, lessonId]);
    }
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

  const { title, content, quiz } = lesson;

  return (
    <Container className="my-3">
      <h2>{title}</h2>
      <ProgressTracker
        completed={completedLessons.length}
        total={lessons.length}
      />
      <div dangerouslySetInnerHTML={{ __html: content }} />
      <Quiz quiz={quiz} onComplete={markLessonComplete} />

      {/* Back to Home Button */}
      <div className="mt-4">
        <Button variant="primary" onClick={() => navigate("/")}>
          <FontAwesomeIcon icon={faHome} className="me-2" />
          Back to Home
        </Button>
      </div>
    </Container>
  );
};

export default LessonPage;
