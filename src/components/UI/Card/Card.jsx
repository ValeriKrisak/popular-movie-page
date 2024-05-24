import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import defaultimg from "../../../asset/default_poster.jpg";

import "./Card.css";

export default function Card({ title, date, image, vote }) {
  let setcolor = "#d00060";
  function formatDate(date) {
    const newdate = new Date(date);

    if (isNaN(newdate.getTime())) {
      return "Unknown release date";
    }

    const formattedDate = new Intl.DateTimeFormat("en-US", {
      month: "short",
      day: "2-digit",
      year: "numeric",
    }).format(newdate);

    return formattedDate;
  }

  function handleMissingImg(event) {
    event.target.src = defaultimg;
  }

  const percentage = Math.round((vote / 10) * 100);

  if (percentage >= 70) {
    setcolor = "#008000";
  } else if (percentage <= 69 && percentage >= 50) {
    setcolor = "#FFFF00";
  } else {
    setcolor = "#FF0000";
  }

  return (
    <div className="card-container">
      <div className="img-container">
        <img
          loading="lazy"
          src={`https://media.themoviedb.org/t/p/w220_and_h330_face/${image}`}
          onError={handleMissingImg}
          alt={title}
        />
        <div className="dots-button-container">
          <button className="dots-button">
            <div className="dots-button-img glyphicon" />
          </button>
        </div>
      </div>
      <div className="score-bar overlay">
        <CircularProgressbar
          value={percentage}
          text={`${percentage}%`}
          className="circular-progress"
          styles={buildStyles({
            textColor: "#fff",
            pathColor: setcolor,
            trailColor: "#333",
            backgroundColor: "#000",
            textSize: "2rem",
          })}
          background
          backgroundPadding={6}
        />
      </div>
      <div className="card-text">
        <h2 className="card-title">{title}</h2>
        <p>{formatDate(date)}</p>
      </div>
    </div>
  );
}
