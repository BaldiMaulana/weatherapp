import React from "react";

const WeatherDisplay = ({ data, city }) =>{
  const currentDate = new Date();

  if (data && data.main && data.main.temp) {
    // Konversi suhu dari Kelvin ke Celsius
    const temperatureInCelsius = (data.main.temp - 273.15).toFixed(2); // Mengambil 2 angka desimal

    const iconUrl = `http://openweathermap.org/img/wn/${data.weather[0].icon}.png`;


    return (
      <div className="flex justify-between">
      <div>
        <h2>Weather in {city}</h2>
        <p>Temperature: {temperatureInCelsius} °C</p>
        <p>Humidity: {data.main.humidity}%</p>
        <p>Description: {data.weather[0].description}</p>
        <p>Time: {currentDate.toLocaleTimeString()}</p>
        <p>Date: {currentDate.toLocaleDateString()}</p>
      </div>
        <div className="flex">
        <img className="w-16 h-16" src={iconUrl} alt="weather icon"/>
        </div>
      </div>
    );
  } else {
    return <div>Weather results were not available.</div>;
  }
}

  export default WeatherDisplay;