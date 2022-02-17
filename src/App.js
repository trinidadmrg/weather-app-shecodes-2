import React from "react";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="transparent">
      <div className="App">
        <Weather defaultCity="Argentina" />

        <footer>
          <p className="signature">
            Link to GitHub{" "}
            <a href="https://github.com/trinidadmrg/weather-app-shecodes-2">
              https://github.com/trinidadmrg/weather-app-shecodes-2
            </a>
          </p>
        </footer>
      </div>
    </div>
  );
}
