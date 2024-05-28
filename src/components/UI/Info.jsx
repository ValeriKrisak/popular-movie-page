import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleInfo } from "@fortawesome/free-solid-svg-icons";

export default function Info({ message }) {
  return (
    <div className="info-container">
      <div className="info-icon">
        <FontAwesomeIcon icon={faCircleInfo} />
      </div>
      <div className="info-message">{message}</div>
    </div>
  );
}
