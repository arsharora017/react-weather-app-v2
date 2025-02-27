const NavBar = () => {
  return (
    <div className="w-screen bg-[#f6f1ea] text-black text-xl flex justify-center">
      <ul className="flex justify-around content-center h-10 w-[800px]">
        <li className="self-center">Today</li>
        <li className="self-center">5 Days</li>
        <li className="self-center">Weather Map</li>
      </ul>
    </div>
  );
};

export default NavBar;
