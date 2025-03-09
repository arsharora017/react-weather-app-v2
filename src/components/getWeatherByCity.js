import { DateTime } from "luxon";

//get Lat and Lon values from openweather's geocoding API
const getLatLon = async (city) => {
  const geoCodingUrl = `http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=${1}&appid=${
    import.meta.env.VITE_OPENWEATHER_API_KEY
  }`;

  try {
    const response = await fetch(geoCodingUrl);
    const data = await response.json();

    if (data.length > 0) {
      const lat = data[0].lat;
      const lon = data[0].lon;
      return { lat, lon };
    } else {
      throw new Error("Location not found");
    }
  } catch (error) {
    console.log(error);
  }
};

// Using the Lat and Lon values to get current weather
// using openweather's current weather data API
const getCurrWeather = async (lat, lon) => {
  const currWeatherUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${
    import.meta.env.VITE_OPENWEATHER_API_KEY
  }&units=metric`;
  try {
    const response = await fetch(currWeatherUrl);
    const data = await response.json();
    const formattedCurrData = formatCurrentData(data);
    console.log(formattedCurrData);
    return formattedCurrData;
  } catch (error) {
    console.log("Error fetching weather data:", error);
  }
};

// Function to convert
const formatToLocalTime = (time, timezone) => {
  return DateTime.fromSeconds(time)
    .setZone(timezone)
    .toFormat("yyyy-MM-dd HH:mm:ss");
};

const iconUrlFromCode = (icon) => {
  return `https://openweathermap.org/img/wn/${icon}@2x.png`;
};

const formatCurrentData = (data) => {
  const {
    coord: { lat, lon },
    main: { temp, feels_like, temp_max, temp_min, humidity },
    visibility,
    name,
    dt,
    id,
    sys: { country, sunrise, sunset },
    weather,
    wind: { speed },
    timezone,
  } = data;

  const { description, icon, main } = weather[0];
  const localTime = formatToLocalTime(dt, timezone);
  const sunriseTime = formatToLocalTime(sunrise, timezone);
  const sunsetTime = formatToLocalTime(sunset, timezone);
  const weatherIcon = iconUrlFromCode(icon);

  return {
    temp,
    feels_like,
    temp_min,
    temp_max,
    humidity,
    name,
    country,
    speed,
    visibility,
    sunriseTime,
    sunsetTime,
    weatherIcon,
    description,
    localTime,
    dt,
    timezone,
    lat,
    lon,
    id,
    main,
  };
};

// Component Function
const getWeatherByCity = async (city) => {
  const { lat, lon } = await getLatLon(city);
  const currWeatherData = await getCurrWeather(lat, lon);
  return currWeatherData;
};

export default getWeatherByCity;
