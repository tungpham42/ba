import { useParams, useNavigate } from "react-router-dom";
import { Container, Button } from "react-bootstrap";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faArrowLeft,
  faArrowRight,
  faPlay,
  faPause,
  faStop,
  faCheck,
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
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [speech, setSpeech] = useState(null);

  useEffect(() => {
    localStorage.setItem("completedLessons", JSON.stringify(completedLessons));
  }, [completedLessons]);

  // Stop speech on page unload (e.g., hard reload, navigation away)
  useEffect(() => {
    const handleBeforeUnload = () => {
      stopSpeech();
    };

    window.addEventListener("beforeunload", handleBeforeUnload);

    // Cleanup the event listener when the component unmounts
    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, []); // Empty dependency array ensures this runs once on mount/unmount

  const markLessonComplete = () => {
    if (!completedLessons.includes(lessonId)) {
      setCompletedLessons((prev) => [...prev, lessonId]);
    }
  };

  const handleNavigation = (lessonId) => {
    setQuizAnswers({});
    stopSpeech();
    navigate(`/lesson/${lessonId}`);
  };

  const handleHomeClick = () => {
    stopSpeech();
    navigate("/");
  };

  const speakContent = () => {
    if (isSpeaking) return;

    const textContent = lesson.content.replace(/<[^>]+>/g, "");
    const utterance = new SpeechSynthesisUtterance(textContent);
    utterance.lang = "en-US";
    utterance.rate = 0.8;
    utterance.onend = () => setIsSpeaking(false);
    setSpeech(utterance);
    window.speechSynthesis.speak(utterance);
    setIsSpeaking(true);
  };

  const pauseSpeech = () => {
    if (isSpeaking) {
      window.speechSynthesis.pause();
      setIsSpeaking(false);
    }
  };

  const resumeSpeech = () => {
    if (!isSpeaking && speech) {
      window.speechSynthesis.resume();
      setIsSpeaking(true);
    }
  };

  const stopSpeech = () => {
    window.speechSynthesis.cancel();
    setIsSpeaking(false);
    setSpeech(null);
  };

  if (!lesson) {
    return (
      <Container className="my-3">
        <h2>Lesson not found</h2>
        <Button variant="primary" onClick={handleHomeClick}>
          <FontAwesomeIcon icon={faHome} className="me-2" />
          Back to Home
        </Button>
      </Container>
    );
  }

  const isCompleted = completedLessons.includes(lessonId);

  return (
    <Container className="my-3">
      <h2>
        {`${lessonId}. ${lesson.title}`}
        {isCompleted && (
          <FontAwesomeIcon
            icon={faCheck}
            className="ms-2 text-success"
            title="Lesson Completed"
          />
        )}
      </h2>
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

        <Button variant="primary" onClick={handleHomeClick}>
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

      <h3 className="text-left">Content</h3>
      <div className="mb-3">
        <Button
          variant="success"
          onClick={speakContent}
          disabled={isSpeaking || speech}
          className="me-2"
        >
          <FontAwesomeIcon icon={faPlay} />
        </Button>
        <Button
          variant="warning"
          onClick={pauseSpeech}
          disabled={!isSpeaking}
          className="me-2"
        >
          <FontAwesomeIcon icon={faPause} />
        </Button>
        <Button
          variant="warning"
          onClick={resumeSpeech}
          disabled={isSpeaking || !speech}
          className="me-2"
        >
          <FontAwesomeIcon icon={faPlay} />
        </Button>
        <Button variant="danger" onClick={stopSpeech} disabled={!speech}>
          <FontAwesomeIcon icon={faStop} />
        </Button>
      </div>
      <div dangerouslySetInnerHTML={{ __html: lesson.content }} />

      <h3 className="text-left">Quiz</h3>
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

        <Button variant="primary" onClick={handleHomeClick}>
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
