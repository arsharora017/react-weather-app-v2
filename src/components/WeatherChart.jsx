import { useContext } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  LabelList,
} from "recharts";
import WeatherContext from "../context/WeatherContext";
import { DateTime } from "luxon";
import useFetchWeatherForecast from "../hooks/useFetchWeatherForecast";

const WeatherChart = () => {
  const { weather } = useContext(WeatherContext);
  const { forecastData, loading, error } = useFetchWeatherForecast(
    weather.lat,
    weather.lon
  );

  // Format dorecast data for plotting
  const formatForecastData = (data) => {
    if (!data || !data.list) {
      return [];
    }
    const now = DateTime.now();
    return data.list
      .filter((entry) => {
        const entryTime = DateTime.fromSeconds(entry.dt);
        return entryTime <= now.plus({ hours: 24 }); // Shows next 24 hours
      })
      .map((entry, index) => ({
        time: DateTime.fromSeconds(entry.dt).toFormat("h a"),
        temperature: Math.round(entry.main.temp),
        feelsLike: Math.round(entry.main.feels_like),
        showLabel: index % 3 === 0, // Only show label every 3 hours
      }));
  };

  const formattedData = formatForecastData(forecastData);

  if (loading) return <p className="text-white">Loading...</p>;
  if (error) return <p className="text-red-500">{error}</p>;
  return (
    <div className="w-auto h-72 bg-gray-900 p-4 rounded-lg">
      <header>
        <h1>Today's Temperature</h1>
      </header>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={formattedData}>
          {/* X-Axis: Show time every 3 hours */}
          <XAxis
            dataKey="time"
            stroke="#ffffff"
            tickFormatter={(value, index) => (index % 1 === 0 ? value : "")} // Label at every 3 hours
            angle={0} // Rotate labels slightly to avoid overlap
            interval={0} // Force labels to appear
            fontSize={12}
            tickLine={false}
            axisLine={false}
          />
          {/* Y-Axis: Scale of 8°C intervals */}
          <YAxis
            stroke="#ffffff"
            domain={[
              (dataMin) => Math.floor(dataMin / 8) * 8 - 4, // Round down and add padding
              (dataMax) => Math.ceil(dataMax / 8) * 8 + 4, // Round up and add padding
            ]}
            tickCount={10}
            fontSize={12}
            tickLine={false}
            axisLine={false}
            tickFormatter={(value) => `${Math.round(value)}°`}
          />
          <Tooltip contentStyle={{ backgroundColor: "#333", color: "#fff" }} />
          {/* Temperature Line with labels */}
          <Line
            type="monotone"
            dataKey="temperature"
            stroke="#00bcd4"
            strokeWidth={2}
            dot={{ stroke: "white", strokeWidth: 2 }}
          >
            <LabelList
              dataKey="temperature"
              position="top"
              fill="#fff"
              fontSize={12}
            />
          </Line>
          {/* Feels Like Temperature (Dotted Line) */}
          <Line
            type="monotone"
            dataKey="feelsLike"
            stroke="#ffffff"
            strokeWidth={2}
            strokeDasharray="5 5"
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default WeatherChart;
