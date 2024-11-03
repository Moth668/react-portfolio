// src/pages/Weather.tsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';

interface WeatherData {
  date: string;
  temperature: number;
  description: string;
  icon: string;
}

const Weather: React.FC = () => {
  const [forecast, setForecast] = useState<WeatherData[]>([]);
  const [city, setCity] = useState('New York'); // Default city
  const [error, setError] = useState<string | null>(null);

  const API_KEY = process.env.VITE_OPENWEATHER_API_KEY;

  useEffect(() => {
    const fetchCoordinatesAndWeather = async () => {
      if (!API_KEY) {
        setError('API Key is missing. Please check your environment variables.');
        return;
      }

      try {
        // Fetch coordinates from the Geocoding API
        const geoResponse = await axios.get(
          `https://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=${API_KEY}`
        );

        if (geoResponse.data.length === 0) {
          setError('City not found. Please enter a valid city name.');
          return;
        }

        const { lat, lon } = geoResponse.data[0];

        // Fetch weather data using the coordinates
        const weatherResponse = await axios.get(
          `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=metric&appid=${API_KEY}`
        );

        const forecastData = weatherResponse.data.list
          .filter((item: any, index: number) => index % 8 === 0) // Get one forecast per day
          .map((item: any) => ({
            date: item.dt_txt,
            temperature: item.main.temp,
            description: item.weather[0].description,
            icon: `http://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`,
          }));

        setForecast(forecastData);
        setError(null);
      } catch (err) {
        setError('Failed to fetch weather data. Please check the city name and try again.');
      }
    };

    fetchCoordinatesAndWeather();
  }, [city, API_KEY]);

  return (
    <div className="container my-5">
      <h2 className="mb-4">5-Day Weather Forecast for {city}</h2>
      {error && <div className="alert alert-danger">{error}</div>}
      <div className="input-group mb-4">
        <input
          type="text"
          className="form-control"
          placeholder="Enter city name"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <button className="btn btn-primary" onClick={() => setCity(city)}>
          Search
        </button>
      </div>
      <div className="row">
        {forecast.map((day, index) => (
          <div className="col-md-2 mb-3" key={index}>
            <div className="card text-center">
              <img src={day.icon} alt={day.description} className="card-img-top" />
              <div className="card-body">
                <h5 className="card-title">{new Date(day.date).toLocaleDateString()}</h5>
                <p className="card-text">
                  {day.temperature}°C
                  <br />
                  {day.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Weather;
