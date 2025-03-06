import appLogo from "../assets/appLogo.jpeg";
import { IoLocationSharp } from "react-icons/io5";
import NavBar from "./NavBar";
import ThemeToggle from "./ThemeToggle"; // Import the ThemeToggle component
import { NavLink } from "react-router";
import Input from "./Input";

const Header = () => {
  return (
    <header className="flex flex-col text-white">
      <div className="flex justify-around py-4 bg-[#0e2144]">
        <div className="w-20">
          <NavLink to="/">
            <img src={appLogo} alt="app logo" />
          </NavLink>
        </div>
        <div className="flex gap-20">
          <div className="flex justify-center gap-2">
            <IoLocationSharp className="self-center " size={30} />
            <span className="self-center">City, State, Country</span>
          </div>
          <div className="flex justify-center">
            <Input />
          </div>
        </div>
        <div className="content-center">
          {/* <MdDarkMode className="text-black" size={40} /> */}
          <ThemeToggle /> {/* Add the ThemeToggle component */}
        </div>
      </div>
      <NavBar />
    </header>
  );
};

export default Header;
