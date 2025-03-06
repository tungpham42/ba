import { Col, Card, Button, Badge } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlayCircle, faCheckCircle } from "@fortawesome/free-solid-svg-icons";

const LessonCard = ({ lesson: { id, title, content }, onStart, completed }) => {
  return (
    <Col key={id} xxl={4} xl={4} lg={6} md={6} sm={12} className="mb-4">
      <Card className="d-flex flex-column h-100 shadow-lg">
        <Card.Body className="d-flex flex-column">
          {/* Title with Completed Indicator */}
          <Card.Title className="d-flex justify-content-between align-items-center">
            {`${id}. ${title}`}
            {completed && (
              <Badge bg="success">
                <FontAwesomeIcon icon={faCheckCircle} className="me-1" />
                Completed
              </Badge>
            )}
          </Card.Title>

          <Card.Text
            dangerouslySetInnerHTML={{
              __html: content.substring(0, 160) + "...",
            }}
          />

          {/* Start Lesson Button */}
          <div className="mt-auto d-flex justify-content-start gap-3">
            <Button variant="primary" onClick={() => onStart(id)}>
              <FontAwesomeIcon icon={faPlayCircle} className="me-2" />
              Start Lesson
            </Button>
          </div>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default LessonCard;
