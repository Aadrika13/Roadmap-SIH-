import React, { useState } from "react";
import axios from "axios";
import LanguageTopics from "./components/LanguageTopics";
import "./App.css";

function App() {
  const [languageName, setLanguageName] = useState("");
  const [days, setDays] = useState("");
  const [fullData, setFullData] = useState(null);

  const handleFetchTopics = async () => {
    try {
      console.log("sending api call");
      const response = await axios.post("http://localhost:3000/api/prompt-post", {
        prompt: `Provide a learning plan for ${languageName} for ${days} days.`
      });
      console.log(response.data);
      setFullData(response.data);  // Assuming your API returns the JSON object here
    } catch (error) {
      console.error("Error fetching topics:", error);
    }
  };

  return (
    <div className="App">
      <h1>AI Learning Plan</h1>
      <input
        type="text"
        value={languageName}
        onChange={(e) => setLanguageName(e.target.value)}
        placeholder="Enter Language Name"
      />
      <input
        type="number"
        value={days}
        onChange={(e) => setDays(e.target.value)}
        placeholder="Enter Number of Days"
      />
      <button onClick={handleFetchTopics}>Fetch Learning Plan</button>

      {fullData && (
        <LanguageTopics
          fullData={fullData}
        />
      )}
    </div>
  );
}

export default App;
