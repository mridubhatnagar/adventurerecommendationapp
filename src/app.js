import React, { useState } from "react";
import "./styles.css";

var adventureActivityRecommendation = {
  "Himalayan Treks ": "Dayara Bugyal(Uttarakhand)",
  "Paragliding": "Bir Billing(Himachal Pradesh)",
  "White Water Rafting": "Rishikesh (Uttarakhand)",
  "White Water Kayaking": "Rishikesh (Uttarakhand)",
  "Surfing": "Chennai(Tamil Nadu)",
  "Scuba Diving": "Andaman and Nicobar"
};

var activities = Object.keys(adventureActivityRecommendation);

export default function App() {
  const [meaning, setMeaning] = useState("");

  function activityClickHandler(activity) {
    // processing
    var meaning = adventureActivityRecommendation[activity];
    setMeaning(meaning); // react call to show output
  }
  return (
    <div className="App">
      <h1>Adventure Sports are experience of a lifetime!</h1>

      <h3>
        {" "}
        Select the adventure sport and we'll recommend you best destinations.
      </h3>
      {activities.map(function (activity) {
        return (
          <span
            onClick={() => activityClickHandler(activity)}
            style={{
              fontSize: "2rem",
              padding: "0.5rem",
              cursor: "pointer",
              display: "block"
            }}
            key={activity}
          >
            {activity}
          </span>
        );
      })}

      <h1>Here you go .... </h1>

      <h2 style={{ color: "red" }}> {meaning} </h2>
      {/* Actual output set by React using useState */}
    </div>
  );
}
