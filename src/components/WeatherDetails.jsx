import { useContext } from "react";
import WeatherContext from "../context/WeatherContext";
import { Compass, Droplet, Eye, Gauge, Thermometer, Wind } from "lucide-react";

const WeatherDetails = () => {
  const { weather } = useContext(WeatherContext);

  const getWindDirection = (degree) => {
    const directions = ["N", "NE", "E", "SE", "S", "SW", "W", "NW"];

    const index =
      Math.round(((degree %= 360) < 0 ? degree + 360 : degree) / 45) % 8;
    return directions[index];
  };
  const details = [
    {
      title: "High/Low",
      value: `${weather.roundOffTempMax}°/${weather.roundOffTempMin}°`,
      icon: Thermometer,
    },
    {
      title: "Wind",
      value: `${weather.windSpeed} km/h`,
      icon: Wind,
    },

    {
      title: "Humidity",
      value: `${weather.humidity}%`,
      icon: Droplet,
    },
    {
      title: "Wind Direction",
      value: getWindDirection(weather.deg),
      icon: Compass,
    },
    {
      title: "Visibility",
      value: `${weather.visibilityInKm} km`,
      icon: Eye,
    },
    {
      title: "Pressure",
      value: `${weather.pressure} hPa`,
      icon: Gauge,
    },
  ];
  return (
    <div className="grid grid-cols-2 col-span-2 gap-y-2 gap-x-4 p-4 space-x-2">
      {details.map((detail) => {
        return (
          <div
            key={detail.title}
            className="flex justify-between p-1 items-center border-b border-gray-300 dark:border-gray-600"
          >
            <div className="flex items-center p-0.5 gap-2">
              {detail.icon && <detail.icon className="w-5 h-5" />}{" "}
              {/* Ensure icon exists */}
              <span className="font-medium">{detail.title}</span>
            </div>
            <span>{detail.value}</span>
          </div>
        );
      })}
    </div>
  );
};

export default WeatherDetails;
