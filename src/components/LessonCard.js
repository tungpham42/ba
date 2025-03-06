import { Col, Card, Button, Badge } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlayCircle, faCheckCircle } from "@fortawesome/free-solid-svg-icons";

const LessonCard = ({ lesson: { id, title, content }, onStart, completed }) => {
  return (
    <Col key={id} xxl={4} xl={4} lg={6} md={6} sm={12} className="mb-4">
      <Card className="d-flex flex-column h-100 shadow-lg">
        <Card.Body className="d-flex flex-column">
          {/* Title */}
          <Card.Title>{`${id}. ${title}`}</Card.Title>

          <Card.Text
            dangerouslySetInnerHTML={{
              __html: content.substring(0, 160) + "...",
            }}
          />

          {/* Button and Completed Indicator */}
          <div className="mt-auto d-flex justify-content-between align-items-center">
            <Button variant="primary" onClick={() => onStart(id)}>
              <FontAwesomeIcon icon={faPlayCircle} className="me-2" />
              Start Lesson
            </Button>
            {completed && (
              <Badge bg="success" className="p-2 text-uppercase">
                <FontAwesomeIcon icon={faCheckCircle} className="me-1" />
                Completed
              </Badge>
            )}
          </div>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default LessonCard;
