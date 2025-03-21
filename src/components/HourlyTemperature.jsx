import WeatherChart from "./WeatherChart";

const HourlyTemperature = () => {
  return (
    <div className="flex flex-col w-2/3 mt-10 h-auto ">
      <section className=" flex flex-col border rounded-lg">
        <WeatherChart />
      </section>
    </div>
  );
};

export default HourlyTemperature;
