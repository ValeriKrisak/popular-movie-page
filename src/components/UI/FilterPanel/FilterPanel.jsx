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
        <h2>{title}</h2>
        <FontAwesomeIcon icon={isCollapsed ? faChevronRight : faChevronDown} />
      </div>
      {!isCollapsed && <div>{children}</div>}
    </div>
  );
}
