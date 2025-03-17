import CurrentWeatherConditions from "./CurrentWeatherConditions";
import TodayWeatherConditons from "./TodayWeatherConditons";

const Today = () => {
  return (
    <div className="bg-white text-black dark:bg-[#313544] dark:text-white h-screen flex flex-col w-auto items-center">
      <CurrentWeatherConditions />
      <TodayWeatherConditons />
    </div>
  );
};

export default Today;
