import { useState, useEffect } from "react";
import { Container, Row, Pagination, Button } from "react-bootstrap";
import LessonCard from "../components/LessonCard";
import ProgressTracker from "../components/ProgressTracker";
import lessons from "../data/lessons";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

function Home() {
  const navigate = useNavigate();

  // Load completed lessons from localStorage
  const [completedLessons, setCompletedLessons] = useState(() => {
    return JSON.parse(localStorage.getItem("completedLessons")) || [];
  });

  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;

  // Calculate total pages
  const totalPages = Math.ceil(lessons.length / itemsPerPage);

  // Get lessons for the current page
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentLessons = lessons.slice(startIndex, endIndex);

  // Pagination handler
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  // Clear progress function
  const handleClearProgress = () => {
    setCompletedLessons([]);
    localStorage.removeItem("completedLessons");
  };

  useEffect(() => {
    // Load progress from localStorage when component mounts
    const storedProgress = JSON.parse(localStorage.getItem("completedLessons"));
    if (storedProgress) {
      setCompletedLessons(storedProgress);
    }
  }, []);

  return (
    <Container className="my-3 col-12">
      <h1>Welcome to Business Analyst Fundamentals</h1>
      <ProgressTracker
        completed={completedLessons.length}
        total={lessons.length}
      />

      {/* Clear Progress Button */}
      <Button variant="danger" className="mb-3" onClick={handleClearProgress}>
        <FontAwesomeIcon icon={faTrash} className="me-2" />
        Clear Progress
      </Button>

      <Row className="col-12">
        {currentLessons.map((lesson) => (
          <LessonCard
            key={lesson.id}
            lesson={lesson}
            completed={completedLessons.includes(lesson.id)}
            onStart={(id) => navigate(`/lesson/${id}`)} // No longer updates progress on click
          />
        ))}
      </Row>

      {/* Pagination Controls */}
      <div className="d-flex justify-content-center mt-4">
        <Pagination>
          <Pagination.First
            onClick={() => handlePageChange(1)}
            disabled={currentPage === 1}
          />
          <Pagination.Prev
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
          />
          {[...Array(totalPages)].map((_, index) => {
            const page = index + 1;
            return (
              <Pagination.Item
                key={page}
                active={page === currentPage}
                onClick={() => handlePageChange(page)}
              >
                {page}
              </Pagination.Item>
            );
          })}
          <Pagination.Next
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
          />
          <Pagination.Last
            onClick={() => handlePageChange(totalPages)}
            disabled={currentPage === totalPages}
          />
        </Pagination>
      </div>
    </Container>
  );
}

export default Home;
