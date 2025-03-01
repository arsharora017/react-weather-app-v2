import { NavLink } from "react-router";

const NavBar = () => {
  return (
    <div className="w-screen bg-[#f6f1ea] text-black text-xl flex justify-center dark:bg-[#4f5268] dark:text-white">
      <ul className="flex justify-around content-center h-10 w-[800px] ">
        <li className="self-center">
          <NavLink to="/">Today</NavLink>
        </li>
        <li className="self-center">
          <NavLink to="five-days">5 Days</NavLink>
        </li>
        <li className="self-center">
          <NavLink to="/weather-map">Weather Map</NavLink>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;

//#292A32
//#292A2D - ok
//#192A32
//#4f5268 - ookkk
