// const FetchLocationData = () => {
//   const getLatLon = async (city) => {
//     const geoCodingUrl = `http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=${1}&appid=${
//       import.meta.env.VITE_OPENWEATHER_API_KEY
//     }`;

//     try {
//       const response = await fetch(geoCodingUrl);
//       const data = await response.json();

//       if (data.length > 0) {
//         const lat = data[0].lat;
//         const lon = data[0].lon;
//         return { lat, lon };
//       } else {
//         throw new Error("Location not found");
//       }
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   const getCurrWeather = async (lat, lon) => {
//     const currWeatherUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${
//       import.meta.env.VITE_OPENWEATHER_API_KEY
//     }`;
//     try {
//       const response = await fetch(currWeatherUrl);
//       const currWeatherData = await response.json();
//       console.log(currWeatherData);
//       return currWeatherData;
//     } catch (error) {
//       console.error("Error fetching weather data:", error);
//     }
//   };

//   const getWeatherByCity = async (city) => {
//     const { lat, lon } = await getLatLon(city);
//     const currWeatherData = await getCurrWeather(lat, lon);
//     return currWeatherData;
//   };

//   //   getWeatherByCity("London").then((data) => {
//   //     "Weather in London:", data;
//   //   });

//   return getWeatherByCity;
// };

// export default FetchLocationData;
