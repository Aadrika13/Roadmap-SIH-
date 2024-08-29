// src/components/LanguageTopics.jsx
import React from "react";

function LanguageTopics({ fullData }) {
  return (
    <div className="topics-container">
      {Object.keys(fullData).map((language, index) => (
        <div key={index}>
          <h2>{language} Learning Plan</h2>
          {Object.keys(fullData[language]).map((day, idx) => (
            <div className="day-container" key={idx}>
              <h3>{day}</h3>
              <p><strong>Topic:</strong> {fullData[language][day].Topic}</p>
              <p><strong>Description:</strong> {fullData[language][day].Description}</p>
              <p><strong>Resources:</strong> {fullData[language][day].Resources}</p>
              <p><strong>Task:</strong> {fullData[language][day].Task}</p>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

export default LanguageTopics;
