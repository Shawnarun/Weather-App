import React, { useState, useEffect } from "react";
import "./weather.css";
import cities from "./cities.json";
import NavScrollExample from "../Navbar/Navbar"

const Weather = () => {
  const [weatherData, setWeatherData] = useState([]);

  useEffect(() => {
    const cityCodes = cities.map((city) => city.CityCode);
    const cachedData = JSON.parse(localStorage.getItem('weatherData'));
    const cachedTimestamp = parseInt(localStorage.getItem('weatherDataTimestamp'));


    const apiurl = `https://api.openweathermap.org/data/2.5/group?id=${cityCodes.join(
      ","
    )}&units=metric&appid=ecb79ff5dd5dfd62ad850d3501d92fe5`;


    if (cachedData && cachedTimestamp && Date.now() - cachedTimestamp < 5 * 60 * 1000) {
      setWeatherData(cachedData);
    } else {
      fetch(apiurl)
      .then((response) => response.json())
      .then((data) => {
        const extractedData = data.list.map((city) => ({
          id: city.id,
          name: city.name,
          description: city.weather[0].description,
          temp: city.main.temp,
        }));
        setWeatherData(extractedData);
      });

    }

   
  }, []);

  return (
    <>
    <NavScrollExample/>
    <div className="background">
      
      <div class="CardContainer">
        {weatherData.map((city) => (
          <div class="card" key={city.name}>
            <h3>{city.name}</h3>
            <h3>{city.id}</h3>
            <p>{city.description}</p>
            <p>{city.temp}</p>
          </div>
        ))}
      </div>
    </div>
    </>
  );
};

export default Weather;
