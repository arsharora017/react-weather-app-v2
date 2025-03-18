import { Outlet } from "react-router";
import Header from "./Header";
import { WeatherProvider } from "../context/WeatherContext";
import Footer from "./Footer";

const Body = () => {
  return (
    <div className="bg-white text-black dark:bg-[#313544] dark:text-white">
      <WeatherProvider>
        <Header />
        <Outlet />
        <Footer />
      </WeatherProvider>
    </div>
  );
};

export default Body;
