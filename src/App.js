import React from "react";
import CurrentLocation from "./currentLocation";
import "./App.css";

function App() {
  return (
    <React.Fragment>
      <div className="container">
        <CurrentLocation />
      </div>
      <div className="footer-info">
        <p>
          Weather App | Developed and Designed by{" "}
          <strong>Rahul Kumar</strong> | Powered by{" "}
          <a
            href="https://openweathermap.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            OpenWeatherMap API
          </a>
        </p>
      </div>
    </React.Fragment>
  );
}

export default App;
