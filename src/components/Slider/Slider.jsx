import { useState } from "react";
import "./Slider.css";

export default function Slider({ marks, min, max, setvalue }) {
  const [value, setValue] = useState(setvalue);

  const handleSliderChange = (event) => {
    const newValue = parseInt(event.target.value);
    setValue(newValue);
  };
  return (
    <div className="slider-container">
      <input
        type="range"
        min={min}
        max={max}
        value={value}
        id="rangeSlider"
        onChange={handleSliderChange}
      />
      <div className="slider-marks">
        {marks.map((i, index) => {
          return (
            <span key={i + index} className="mark">
              {i}
            </span>
          );
        })}
      </div>
    </div>
  );
}
