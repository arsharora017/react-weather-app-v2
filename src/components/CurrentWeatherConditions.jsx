import { useContext } from "react";
import WeatherContext from "../context/WeatherContext";

const CurrentWeatherConditions = () => {
  const { weather } = useContext(WeatherContext);

  weather;
  return (
    <div className="flex w-2/3 mt-10">
      <section className="w-screen flex flex-col border rounded-lg">
        <div className="flex p-2 h-13 border-b">
          <h1>{`${weather.name}, ${weather.country}`}</h1>
          &nbsp;
          <span> As of {weather.localTime}</span>
          &nbsp;
          <span>({weather.localDate})</span>
          {/* <span>{weather.timezone}</span> */}
        </div>
        <div className="blue p-4 h-40">
          <div className="yellow flex justify-between h-full">
            <div className="green border p-2">
              <div>
                {weather.roundOffTemp} <span>°</span>
              </div>
              <div>{weather.main}</div>
              <div>
                Day {weather.roundOffTempMax} <span>°</span> | night{" "}
                {weather.roundOffTempMin}
                <span>°</span>
              </div>
            </div>
            <div className="green border p-2">
              <div>
                <img src={weather.weatherIcon} alt="weather icon" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CurrentWeatherConditions;
