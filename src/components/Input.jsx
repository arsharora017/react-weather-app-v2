import { useContext, useState } from "react";
import { CiSearch } from "react-icons/ci";
import WeatherContext from "../context/WeatherContext";

const Input = () => {
  const [city, setCity] = useState("");
  const { fetchWeather } = useContext(WeatherContext);

  const handleKeydown = (e) => {
    if (e.key === "Enter") {
      if (city !== "") {
        // enter input value to get weather data by city
        fetchWeather(city);
      }
      setCity("");
    }
  };

  const handleSearchClick = () => {};
  return (
    <div className="flex justify-center gap-2">
      <input
        type="text"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        onKeyDown={(e) => handleKeydown(e)}
        placeholder="Search City"
        className=" text-white text-lg font-light px-2 py-2 w-80 h-10 self-center shadow-xl capitalize focus:outline-none  rounded-lg border "
      />
      <CiSearch
        className="self-center text-white"
        size={30}
        onClick={handleSearchClick}
      />
    </div>
  );
};

export default Input;
