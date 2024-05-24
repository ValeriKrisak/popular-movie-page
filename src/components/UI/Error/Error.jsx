import "./Error.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExclamation } from "@fortawesome/free-solid-svg-icons";

export default function Error({ message }) {
  return (
    <div className="error-container">
      <div className="error-icon">
        <FontAwesomeIcon icon={faExclamation} />
      </div>
      <div className="error-message">
        {message || "An error occurred. Please try again later."}
      </div>
    </div>
  );
}
