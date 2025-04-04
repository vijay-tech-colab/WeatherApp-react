import {
    WiHumidity,
    WiStrongWind,
    WiBarometer,
    WiFog,
    WiSunrise,
    WiSunset,
  } from "react-icons/wi";
  import React from "react";
  import getWeatherIcon from "../WeatherIcons";
import Loading from "./Loading";
  
  const kelvinToCelsius = (tempK) => (tempK - 273.15).toFixed(1);
  const unixToTime = (timestamp) => {
    const date = new Date(timestamp * 1000);
    return date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
  };
  
  const WeatherCard = ({ weather , loading}) => {
    if(loading){
        return <Loading/>
    }
    return (
      <div className="mx-auto bg-white/10 backdrop-blur-md text-white rounded-2xl shadow-lg m-6 mt-6 border border-white/30 p-6 max-w-sm">
        <div className="flex flex-col items-center">
          {getWeatherIcon(weather.weather[0].icon)}
          <h2 className="text-2xl font-bold mt-2">{weather.name}</h2>
          <p className="text-4xl font-semibold">
            {kelvinToCelsius(weather.main.temp)}°C
          </p>
          <p className="capitalize text-md mt-1 text-gray-200">
            {weather.weather[0].description}
          </p>
        </div>
  
        <div className="grid grid-cols-2 gap-4 mt-6 text-sm text-white">
          <div className="flex items-center gap-2">
            <WiHumidity size={24} />
            <span>Humidity: {weather.main.humidity}%</span>
          </div>
          <div className="flex items-center gap-2">
            <WiStrongWind size={24} />
            <span>Wind: {weather.wind.speed} km/h</span>
          </div>
          <div className="flex items-center gap-2">
            <WiBarometer size={24} />
            <span>Pressure: {weather.main.pressure} hPa</span>
          </div>
          <div className="flex items-center gap-2">
            <WiFog size={24} />
            <span>Visibility: {weather.visibility / 1000} km</span>
          </div>
          <div className="flex items-center gap-2">
            <WiSunrise size={24} />
            <span>Sunrise: {unixToTime(weather.sys.sunrise)}</span>
          </div>
          <div className="flex items-center gap-2">
            <WiSunset size={24} />
            <span>Sunset: {unixToTime(weather.sys.sunset)}</span>
          </div>
        </div>
  
        <div className="mt-6 text-white text-center text-sm">
          <p>Feels Like: {kelvinToCelsius(weather.main.feels_like)}°C</p>
          <p>
            Min: {kelvinToCelsius(weather.main.temp_min)}°C | Max:{" "}
            {kelvinToCelsius(weather.main.temp_max)}°C
          </p>
        </div>
      </div>
    );
  };
  
  export default WeatherCard;
  