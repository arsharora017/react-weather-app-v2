import { useContext } from "react";
import WeatherContext from "../context/WeatherContext";
import SunriseSunsetArc from "./SunriseSunsetArc";

const TodayWeatherConditons = () => {
  const { weather } = useContext(WeatherContext);

  return (
    <div className="flex w-2/3 mt-10">
      <section className="w-screen flex flex-col border rounded-lg">
        <header className="flex p-2 h-13 border-b">
          <h2>Weather Today in {`${weather.name}, ${weather.country}`}</h2>
        </header>
        <div className="blue p-4 h-auto">
          <div className="border-b flex items-end flex-row flex-nowrap">
            <div className="border flex flex-col grow-1">
              <span>Feels Like</span>
              <span>
                {weather.roundOffFeelsLike}
                <span>°</span>
              </span>
            </div>
            <div className="border w-33">
              <div className="flex justify-center items-center">
                <div>
                  {weather && weather.sunriseTime && weather.sunsetTime ? (
                    <SunriseSunsetArc
                      sunrise={weather.sunrise}
                      sunset={weather.sunset}
                    />
                  ) : (
                    <p>Loading</p>
                  )}
                </div>
              </div>
            </div>
          </div>
          <div></div>
        </div>
      </section>
    </div>
  );
};

export default TodayWeatherConditons;
