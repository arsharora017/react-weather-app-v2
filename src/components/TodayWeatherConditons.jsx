import { useContext } from "react";
import WeatherContext from "../context/WeatherContext";
import SunriseSunsetArc from "./SunriseSunsetArc";
import WeatherDetails from "./WeatherDetails";

const TodayWeatherConditons = () => {
  const { weather } = useContext(WeatherContext);

  return (
    <div className="flex w-2/3 mt-10">
      <section className="w-screen flex flex-col border rounded-lg">
        <header className="flex p-2 h-13 border-b items-center">
          <h2 className="text-xl">
            Weather Today in {`${weather.name}, ${weather.country}`}
          </h2>
        </header>
        <div className="blue p-4 h-auto">
          <div className=" flex items-end flex-row flex-nowrap">
            <div className="flex flex-col grow-1 p-1">
              <span className="text-xl">Feels Like</span>
              <span className="text-5xl">
                {weather.roundOffFeelsLike}
                <span>°</span>
              </span>
            </div>
            <div className="w-auto">
              <div className="flex justify-center items-center">
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
          {/* Bottom half */}
          <div>
            <WeatherDetails />
          </div>
        </div>
      </section>
    </div>
  );
};

export default TodayWeatherConditons;
