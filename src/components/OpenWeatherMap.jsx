require('dotenv').config();


// Contoh penggunaan API Key OpenWeatherMap dalam permintaan cuaca
const apiKey = process.env.API_KEY ; // Ganti dengan kunci API Anda
const city = 'Jakarta'; // Ganti dengan nama kota di Indonesia yang Anda inginkan

fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`)
.then((response) => response.json())
.then((data) => {
  setWeatherData(data);
  setCity(location);
})
.catch((error) => {
  // Tangani kesalahan jika terjadi
});
