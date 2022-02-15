import React, { useState } from "react";

export default function WeatherTemperature(props) {
  const [unit, setUnit] = useState("celsius");
  function showFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }

  function showCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  function fahrenheit() {
    return (props.celsius * 9) / 5 + 32;
  }

  if (unit === "celsius") {
    return (
      <div className="temp-container">
        <h4 className="weather-temp">{Math.round(props.celsius)}°</h4>
        <p className="units">
          °C |
          <a href="/" onClick={showFahrenheit}>
            °F
          </a>
        </p>
      </div>
    );
  } else {
    return (
      <div className="temp-container">
        <h4 className="weather-temp">{Math.round(fahrenheit())}°</h4>
        <p className="units">
          <a href="/" onClick={showCelsius}>
            °C
          </a>
          | °F
        </p>
      </div>
    );
  }
}
