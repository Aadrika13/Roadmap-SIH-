// src/components/LanguageTopics.jsx
import React from "react";

function LanguageTopics({ fullData }) {
  // If data in json parse the data
  // const [fulData, setFullData] = useState(null);

  // useEffect(() => {

  //   // Assuming fullData contains a JSON string
    
  //   const jsonData = '{"key1": "value1", "key2": "value2"}'; // Replace this with your actual JSON string
  //   try {
  //     const parsedData = JSON.parse(jsonData);
  //     setFullData(parsedData);
  //   } catch (error) {
  //     console.error('Error parsing JSON:', error);
  //   }

  // }, []);
  // console.log(fulData);
  
  return (
    <div className="topics-container">
      {Object.keys(fullData).map((language, index) => (
        <div key={index}>
          <h2>{language} Learning Plan</h2>
          {Object.keys(fullData[language]).map((day, index) => {
        const dayData = fullData[language][day];
        console.log(fullData[language][day]);
        return (
          <div key={index}>
            <h2>{day}</h2>
            <p><strong>Topic:</strong> {dayData.Topic}</p>
            <p><strong>Description:</strong> {dayData.Description}</p>
            <p><strong>Resources:</strong> <a href={dayData.Resources} target="_blank" rel="noopener noreferrer">{dayData.Resources}</a></p>
            <div>
              <h3>Tasks:</h3>
              <ul>
                {dayData.tasks && dayData.tasks.map((task, idx) => (
                  <li key={idx}>{task}</li>
                ))}
              </ul>
            </div>
          </div>
        );
      })}
        </div>
      ))}
    </div>
  );
}

export default LanguageTopics;
