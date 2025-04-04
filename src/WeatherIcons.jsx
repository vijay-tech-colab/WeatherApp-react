import { WiDaySunny, WiCloud, WiRain, WiThunderstorm, WiSnow } from "react-icons/wi";

const getWeatherIcon = (icon) => {
  const weatherIcons = {
    "01d": <WiDaySunny className="text-white text-6xl" />,
    "01n": <WiDaySunny className="text-white text-6xl" />,
    "02d": <WiCloud className="text-white text-6xl" />,
    "02n": <WiCloud className="text-white text-6xl" />,
    "03d": <WiCloud className="text-white text-6xl" />,
    "03n": <WiCloud className="text-white text-6xl" />,
    "04d": <WiCloud className="text-white text-6xl" />,
    "04n": <WiCloud className="text-white text-6xl" />,
    "09d": <WiRain className="text-white text-6xl" />,
    "09n": <WiRain className="text-white text-6xl" />,
    "10d": <WiRain className="text-white text-6xl" />,
    "10n": <WiRain className="text-white text-6xl" />,
    "11d": <WiThunderstorm className="text-white text-6xl" />,
    "11n": <WiThunderstorm className="text-white text-6xl" />,
    "13d": <WiSnow className="text-white text-6xl" />,
    "13n": <WiSnow className="text-white text-6xl" />,
  };

  return weatherIcons[icon] || <WiDaySunny className="text-white text-6xl" />; // Default Sunny Icon
};

export default getWeatherIcon;


