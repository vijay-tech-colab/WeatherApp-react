import React, { useEffect, useState } from "react";
import WeatherCard from "./components/WeatherCard";
import Header from "./components/Header";
import Loading from "./components/Loading";

function App() {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [cityName , setCityName] = useState('Lucknow')

  const fetchWeatherData = async () => {
    try {
      setLoading(true);
      setError(""); // Reset error state

      const apiKey = import.meta.env.VITE_WEATHER_API_KEY;
      if (!apiKey) {
        throw new Error("API Key is missing");
      }

      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${cityName},IN&appid=${apiKey}`
      );

      const data = await res.json();
      if (!res.ok) {
        console.log(data);
        throw new Error(data.message);
      }

      setWeather(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchWeatherData();
    console.log("ueseffect")
  }, [cityName]);
console.log('app render' , cityName);
  return (
    <div className="w-full h-screen flex flex-col justify-center items-center bg-gradient-to-b from-blue-500 to-gray-900">
      <Header onSearch={setCityName}/>
      {error ? (
        <p className="text-white uppercase text-xl mt-4">{error}</p>
      ) : (
        <WeatherCard weather={weather} loading={loading}/>
      )}
    </div>
  );
}

export default App;
