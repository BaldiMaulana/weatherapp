import LocationInput from "./components/LocationInput";
import WeatherDisplay from "./components/WeatherDisplay";
import React, { useState } from 'react';
import './app.css';


function App() {
  const apiKey = '6c9a86f13b60264c61c333891f3cd5e2'; 
  const [weatherData, setWeatherData] = useState(null);
  const [city, setCity] = useState('');


const handleLocationSearch = (location) => {
  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}`)
  .then((response) => response.json())
  .then((data) => {
    setWeatherData(data);
    setCity(location);
  })
  .catch((error) => {
    // Tangani kesalahan jika terjadi
  });
}

return (
  <div className="flex justify-center items-center h-screen bg-gray-950">
  <main className=" backgroup-filter p-4 rounded-xl glassmorphism space-y-2">
    <h1 className="text-center text-3xl text-white">Weather Apps ☁</h1>
    <LocationInput onLocationSearch={handleLocationSearch} />
    <div className="text-white">
    {weatherData ? (

      <WeatherDisplay data={weatherData} city={city} />

    ) : (
      <p>Enter a location to see the weather.</p>
      )}

      <p className="text-end italic">Create by Bama</p>
    </div>
  </main>
</div>
);

}
export default App;
