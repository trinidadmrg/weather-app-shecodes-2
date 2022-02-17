import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";

export default function WeatherInfo(props) {
  return (
    <div className="results-container">
      <div className="time-and-zone">
        <h2 className="weather-name">{props.data.city}</h2>
        <p className="date">
          <FormattedDate date={props.data.date} />
        </p>
        <WeatherTemperature celsius={props.data.temperature} />
      </div>
      <div>
        <ul className="results">
          <li>Humidity: {props.data.humidity}%</li>
          <li>Wind: {props.data.wind} km/h</li>
        </ul>
      </div>
      <div className="description-container">
        <WeatherIcon code={props.data.icon} size={52} />
        <p>{props.data.description}</p>
      </div>
    </div>
  );
}
