import { useState } from "react";
import "./Checkbox.css";

export default function Checkbox({ title, label }) {
  const [isChecked, setIsChecked] = useState(false);

  function handleCheckboxChange() {
    setIsChecked(!isChecked);
  }
  return (
    <>
      <h3 className="h3-title">{title}</h3>
      <div className="checkbox-container">
        <input
          type="checkbox"
          id="custom-checkbox"
          onChange={handleCheckboxChange}
        />
        <label htmlFor="custom-checkbox" className="checkbox-label">
          {label}
        </label>
      </div>
    </>
  );
}
