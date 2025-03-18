import { useContext } from "react";
import WeatherContext from "../context/WeatherContext";

const CurrentWeatherConditions = () => {
  const { weather } = useContext(WeatherContext);

  weather;
  return (
    <div className="flex w-2/3 mt-10 h-auto">
      <section className="w-screen flex flex-col border rounded-lg">
        <div className="flex p-2 h-13 border-b text-lg items-center">
          <h1 className="font-bold">{`${weather.name}, ${weather.country}`}</h1>
          &nbsp;
          <span> As of {weather.localTime}</span>
          &nbsp;
          <span>({weather.localDate})</span>
          {/* <span>{weather.timezone}</span> */}
        </div>
        <div className="p-4 h-auto">
          <div className="flex justify-between h-full">
            <div className="p-2 flex flex-col items-start">
              <div className="text-7xl font-medium">
                {weather.roundOffTemp} <span>°</span>
              </div>
              <div className="text-xl">{weather.main}</div>
              <div className="text-xl">
                Day {weather.roundOffTempMax} <span>°</span> | night{" "}
                {weather.roundOffTempMin}
                <span>°</span>
              </div>
            </div>
            <div className="p-2 flex flex-col items-center justify-center">
              <img
                src={weather.weatherIcon}
                alt="weather icon"
                className="w-36"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CurrentWeatherConditions;
