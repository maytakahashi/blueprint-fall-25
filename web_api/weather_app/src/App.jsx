import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    fetch(
      "https://api.open-meteo.com/v1/forecast?latitude=40.4862&longitude=-74.4518&current=temperature_2m,relative_humidity_2m,apparent_temperature,precipitation&timezone=America%2FNew_York&wind_speed_unit=mph&temperature_unit=fahrenheit&precipitation_unit=inch"
    )
      .then((response) => response.json())
      .then((data) => setWeather(data))
      .catch((error) => console.error("Error fetching weather data:", error));
  }, [setWeather]);

  return (
    <div>
      <h1>Weather App</h1>
      {weather ? (
        <div>
          <h2>Current Weather</h2>
          <p>Temperature: {weather.current.temperature_2m}°F</p>
          <p>Apparent Temperature: {weather.current.apparent_temperature}°F</p>
          <p>Relative Humidity: {weather.current.relative_humidity_2m}%</p>
          <p>
            Precipitation:{" "}
            {weather.current.precipitation} inches
          </p>
        </div>
      ) : (
        <p>Loading weather data...</p>
      )}
    </div>
  );
}

export default App;
