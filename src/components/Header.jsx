import { MdDarkMode } from "react-icons/md";
import appLogo from "../assets/appLogo.jpeg";
import { CiSearch } from "react-icons/ci";
import { IoLocationSharp } from "react-icons/io5";
import NavBar from "./NavBar";

const Header = () => {
  return (
    <header className="flex flex-col text-white">
      <div className="flex justify-around py-4 bg-[#0e2144]">
        <div className="w-20">
          <img src={appLogo} alt="app logo" />
        </div>
        <div className="flex gap-20">
          <div className="flex justify-center gap-2">
            <IoLocationSharp className="self-center " size={30} />
            <span className="self-center">Loaction</span>
          </div>
          <div className="flex justify-center gap-2">
            <input
              type="text"
              placeholder="Search City"
              className="border rounded-lg p-1.5 w-80 h-10 self-center"
            />
            <CiSearch className="self-center text-white" size={30} />
          </div>
        </div>
        <div className="content-center">
          <MdDarkMode className="text-black" size={40} />
        </div>
      </div>
      <NavBar />
    </header>
  );
};

export default Header;
