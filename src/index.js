import React from "react";
import ReactDOM from "react-dom";
import WeatherApp from "./WeatherApp";
import "./styles.css";

function App() {
  return (
    <div className="App">
      <h1>Weather App</h1>
      <WeatherApp />
      <p>Link to GitHub https://github.com/trinidadmrg/weather-app-shecodes</p>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
