import { createContext, useState } from "react";
import getWeatherByCity from "../components/getWeatherByCity";

// Create context
const WeatherContext = createContext({});

// Custom Hook to use Context
// export const useWeather = () => {
//   return useContext(WeatherContext);
// };

// Provider Component
export const WeatherProvider = ({ children }) => {
  const [weather, setWeather] = useState("");

  // function to fetch and store weather data
  const fetchWeather = async (city) => {
    const data = await getWeatherByCity(city);
    setWeather(data);
  };
  return (
    <WeatherContext.Provider value={{ weather, fetchWeather }}>
      {children}
    </WeatherContext.Provider>
  );
};

export default WeatherContext;
