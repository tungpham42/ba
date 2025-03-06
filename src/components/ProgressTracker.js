import { ProgressBar } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChartLine } from "@fortawesome/free-solid-svg-icons";

const ProgressTracker = ({ completed, total }) => {
  const percentage = (completed / total) * 100;

  return (
    <div className="my-3">
      <h5>
        <FontAwesomeIcon icon={faChartLine} className="me-2" />
        Progress
      </h5>
      {/* Customize ProgressBar with height and additional styling */}
      <ProgressBar
        now={percentage}
        label={`${percentage.toFixed(1)}%`} // Optional: Show one decimal place
        style={{ height: "30px", fontSize: "16px" }} // Increase height and font size
        variant="success" // Optional: Change color to green
      />
    </div>
  );
};

export default ProgressTracker;
