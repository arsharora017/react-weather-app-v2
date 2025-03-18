import CurrentWeatherConditions from "../components/CurrentWeatherConditions";
import HourlyTemperature from "../components/HourlyTemperature";
import TodayWeatherConditons from "../components/TodayWeatherConditons";

const Today = () => {
  return (
    <div className="flex flex-col w-auto items-center h-screen">
      <CurrentWeatherConditions />
      <TodayWeatherConditons />
      <HourlyTemperature />
    </div>
  );
};

export default Today;
