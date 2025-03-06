import { Col, Card, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlayCircle } from "@fortawesome/free-solid-svg-icons";

const LessonCard = ({ lesson: { id, title, content }, onStart }) => {
  return (
    <Col key={id} xxl={4} xl={4} lg={6} md={6} sm={12} className="mb-4">
      <Card className="d-flex flex-column h-100 shadow-lg">
        <Card.Body className="d-flex flex-column">
          <Card.Title>{title}</Card.Title>
          <Card.Text
            dangerouslySetInnerHTML={{
              __html: content.substring(0, 50) + "...",
            }}
          />
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
