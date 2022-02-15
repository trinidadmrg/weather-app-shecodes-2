import React, { useState } from "react";
import axios from "axios";
import WeatherTemperature from "./WeatherTemperature";

let now = new Date();
let currentDay = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

let currentMonth = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

let day = currentDay[now.getDay()];
let date = now.getDate();
let month = currentMonth[now.getMonth()];
let year = now.getFullYear();

export default function WeatherApp() {
  const [city, setCity] = useState("");
  const [loaded, setLoaded] = useState(false);
  const [weather, setWeather] = useState({});

  function displayWeather(response) {
    setLoaded(true);
    setWeather({
      name: response.data.name,
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      description: response.data.weather[0].description,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    let apiKey = "3e43443f02e74f827281e5c5dd6ef4f9";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(displayWeather);
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  let form = (
    <div className="formContainer">
      <form onSubmit={handleSubmit}>
        <input
          className="input"
          type="search"
          placeholder="Enter a city.."
          onChange={updateCity}
        />
        <button className="sendButton" type="Submit">
          Search
        </button>
      </form>
    </div>
  );

  if (loaded) {
    return (
      <div>
        {form}
        <div className="results-container">
          <div className="time-and-zone">
            <h2 className="weather-name">{weather.name}</h2>
            <h3>
              {day}. {date}th {month}. {year}.
            </h3>
            <WeatherTemperature celsius={weather.temperature} />
          </div>
          <ul className="results">
            <li>Humidity: {weather.humidity}%</li>
            <li>Wind: {weather.wind}km/h</li>
          </ul>
          <div className="description-container">
            <img
              className="weather-img"
              src={weather.icon}
              alt={weather.description}
            />
            <p className="weather-desc">{weather.description}</p>
          </div>
        </div>
      </div>
    );
  } else {
    return form;
  }
}
