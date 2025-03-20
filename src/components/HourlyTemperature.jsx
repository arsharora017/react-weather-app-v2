// import { LineChart } from "recharts";
// import { Line, ResponsiveContainer } from "recharts";
import { useContext } from "react";
import WeatherChart from "./WeatherChart";
import WeatherContext from "../context/WeatherContext";

const HourlyTemperature = () => {
  const { weather } = useContext(WeatherContext);
  return (
    <div className="flex flex-col w-2/3 mt-10 h-auto ">
      <section className=" flex flex-col border rounded-lg">
        <WeatherChart />
      </section>
    </div>
  );
};

export default HourlyTemperature;
