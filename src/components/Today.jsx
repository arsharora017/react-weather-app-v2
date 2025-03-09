import CurrentWeatherConditions from "./CurrentWeatherConditions";

const Today = () => {
  return (
    <div className="bg-white text-black dark:bg-[#313544] dark:text-white h-screen flex flex-col w-auto items-center">
      <CurrentWeatherConditions />
    </div>
  );
};

export default Today;
