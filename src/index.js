import React from "react";
import ReactDOM from "react-dom";
import WeatherApp from "./WeatherApp";
import "./styles.css";

function App() {
  return (
    <div className="App">
      <h1>WEATHER FORECAST</h1>
      <WeatherApp />
      <p className="signature">
        Link to GitHub{" "}
        <a href="https://github.com/trinidadmrg/weather-app-shecodes-2">
          https://github.com/trinidadmrg/weather-app-shecodes-2
        </a>
      </p>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
