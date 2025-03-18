import { DateTime } from "luxon";
import { API_CONFIG } from "../utils/constants";

//get Lat and Lon values from openweather's geocoding API
const getLatLon = async (city) => {
  const geoCodingUrl = `${API_CONFIG.GEO}direct?q=${city}&limit=${1}&appid=${
    API_CONFIG.API_KEY
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
  const currWeatherUrl = `${API_CONFIG.BASE_URL}weather?lat=${lat}&lon=${lon}&appid=${API_CONFIG.API_KEY}&units=${API_CONFIG.DEFAULT_PARAMS.units}`;
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

const formatToLocalTime = (secs, offset, format = "hh: mm a") => {
  return DateTime.fromSeconds(secs + offset, { zone: "utc" }).toFormat(format);
};

// Local Time
const formatToLocalDate = (time, offset) => {
  return DateTime.fromSeconds(time + offset, { zone: "utc" }).toFormat(
    "LLL dd, yyyy"
  );
};

const iconUrlFromCode = (icon) => {
  return `https://openweathermap.org/img/wn/${icon}@2x.png`;
};

const formatCurrentData = (data) => {
  const {
    coord: { lat, lon },
    main: { temp, feels_like, temp_max, temp_min, humidity, pressure },
    visibility,
    name,
    dt,
    id,
    sys: { country, sunrise, sunset },
    weather,
    wind: { speed, deg },
    timezone,
    rain,
    snow,
  } = data;

  const roundOffTemp = temp.toFixed();
  const roundOffFeelsLike = feels_like.toFixed();
  const roundOffTempMin = temp_min.toFixed();
  const roundOffTempMax = temp_max.toFixed();
  const { description, icon, main } = weather[0];
  const localTime = formatToLocalTime(dt, timezone);
  const sunriseTime = formatToLocalTime(sunrise, timezone, "hh:mm a");
  const sunsetTime = formatToLocalTime(sunset, timezone, "hh:mm a");
  const weatherIcon = iconUrlFromCode(icon);
  const localDate = formatToLocalDate(sunrise, timezone);
  const windSpeed = (speed * 3.6).toFixed(1);
  const visibilityInKm = (visibility / 1000).toFixed(1);

  return {
    roundOffTemp,
    roundOffFeelsLike,
    roundOffTempMin,
    roundOffTempMax,
    humidity,
    pressure,
    name,
    country,
    windSpeed,
    deg,
    visibilityInKm,
    sunriseTime,
    sunsetTime,
    sunrise,
    sunset,
    weatherIcon,
    description,
    localTime,
    localDate,
    dt,
    timezone,
    lat,
    lon,
    id,
    main,
    rain,
    snow,
  };
};

// Component Function
const getWeatherByCity = async (city) => {
  const { lat, lon } = await getLatLon(city);
  const currWeatherData = await getCurrWeather(lat, lon);
  return currWeatherData;
};

export default getWeatherByCity;
