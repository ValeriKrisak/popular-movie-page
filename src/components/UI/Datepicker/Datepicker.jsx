import { useState } from "react";
import "./Datepicker.css";

export default function Datepicker({ label }) {
  const [selectedDate, setSelectedDate] = useState("");

  function handleDateChange(event) {
    setSelectedDate(event.target.value);
  }

  return (
    <div className="date-picker-container">
      <label>{label}</label>
      <input
        type="date"
        id={label + selectedDate}
        name={label + selectedDate}
        value={selectedDate}
        onChange={handleDateChange}
      />
    </div>
  );
}
