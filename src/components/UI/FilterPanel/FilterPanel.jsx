import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronDown,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import "./FilterPanel.css";

export default function FilterPanel({ title, children }) {
  const [isCollapsed, setIsCollapsed] = useState(true);

  function toggleCollapse() {
    setIsCollapsed(!isCollapsed);
  }

  return (
    <div className="collapsible-card">
      <div className="card-header" onClick={toggleCollapse}>
        {title === "Where To Watch" ? (
          <>
            <h2>{title}</h2>
            <span>35</span>
            <FontAwesomeIcon
              icon={isCollapsed ? faChevronRight : faChevronDown}
            />
          </>
        ) : (
          <>
            <h2>{title}</h2>
            <FontAwesomeIcon
              icon={isCollapsed ? faChevronRight : faChevronDown}
            />
          </>
        )}
      </div>
      {!isCollapsed && <div>{children}</div>}
    </div>
  );
}
