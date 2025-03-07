import { Outlet } from "react-router";
import Header from "./Header";
import { WeatherProvider } from "../context/WeatherContext";

const Body = () => {
  return (
    <>
      <WeatherProvider>
        <Header />
        <Outlet />
      </WeatherProvider>
    </>
  );
};

export default Body;
