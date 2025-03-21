import { useEffect, useState } from "react";
import { getForecastWeather } from "../components/getWeatherByCity";

const useFetchWeatherForecast = (lat, lon) => {
  const [forecastData, setForecastData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!lat || !lon) return;
    const fetchForecast = async () => {
      setLoading(true);

      try {
        const forecast = await getForecastWeather(lat, lon);
        setForecastData(forecast);
      } catch (error) {
        console.error("Error fetching forecast:", error);
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    fetchForecast();
  }, [lat, lon]);

  return { forecastData, loading, error };
};

export default useFetchWeatherForecast;
