import { useState, useEffect, useContext } from "react";
import WeatherContext from "../context/WeatherContext";
WeatherContext;

const SunriseSunsetArc = ({ sunrise, sunset }) => {
  console.log(sunrise, sunset);
  const { weather } = useContext(WeatherContext);

  const [sunPosition, setSunPosition] = useState(0);

  useEffect(() => {
    const updateSunPosition = () => {
      const now = new Date();
      const sunriseTime = new Date(sunrise).getTime();
      const sunsetTime = new Date(sunset).getTime();

      if (isNaN(sunrise) || isNaN(sunset)) {
        console.error("Invalid sunrise or sunset time:", sunrise, sunset);
        return;
      }

      const totalDaylight = sunsetTime - sunriseTime;
      const elapsed = now.getTime() - sunriseTime;
      let ratio = elapsed / totalDaylight;

      // Clamp ratio between 0 and 1
      ratio = Math.max(0, Math.min(1, ratio));
      setSunPosition(ratio);
    };

    updateSunPosition();
    const interval = setInterval(updateSunPosition, 60000); // Update every minute

    return () => clearInterval(interval);
  }, [sunrise, sunset]);

  // Arc dimensions
  const cx = 50,
    cy = 50; // Center of the circle
  const r = 40; // Radius of the arc

  // Calculate Sun Position along the arc
  const angle = sunPosition * Math.PI; // Convert ratio to radians (0 to π for half-circle)
  const sunX = cx - r * Math.cos(angle - Math.PI); // Invert X-axis
  const sunY = cy - r * Math.sin(angle); // Standard Y positioning

  return (
    <div className="flex flex-col items-center p-1">
      <div className="w-25">
        <svg viewBox="0 0 100 60" className="w-full max-w-xs">
          {/* Arc Path */}
          <path
            d="M10,50 A40,40 0 0,1 90,50"
            stroke="orange"
            strokeWidth="2"
            fill="none"
          />

          {/* Sun Indicator */}
          <circle cx={Number(sunX)} cy={Number(sunY)} r="3" fill="yellow" />

          {/* Sunrise and Sunset Icons */}
          <text x="5" y="55" fontSize="6" fill="black"></text>
          <text x="88" y="55" fontSize="6" fill="black"></text>
        </svg>
      </div>

      {/* Time Labels */}
      <div className="flex justify-between w-full max-w-xs text-sm mt-1 gap-2">
        <div className="flex">
          <span className="">
            <svg
              className="size-5  stroke-orange-400 fill-amber-400"
              name="sunrise-line"
              viewBox="0 0 24 24"
            >
              <title>Sun Rise</title>
              <path d="M10.862 6.052v5.329a.75.75 0 0 0 1.5 0V6.036l1.772 1.534a.75.75 0 0 0 .982-1.134l-3.003-2.601a.75.75 0 0 0-.982 0L8.128 6.436A.75.75 0 0 0 9.11 7.57l1.752-1.518zM21 19.128a.75.75 0 0 0 0-1.5H3.167a.75.75 0 1 0 0 1.5H21z"></path>
            </svg>
          </span>

          <span>{weather.sunriseTime}</span>
        </div>
        <div className="flex">
          <span className="">
            <svg
              className="size-5 stroke-orange-400 fill-amber-400"
              name="sunset-line"
              viewBox="0 0 24 24"
            >
              <title>Sunset</title>
              <path d="M10.862 9.853L9.044 8.278a.75.75 0 1 0-.982 1.134l3.003 2.602a.75.75 0 0 0 .982 0l3.004-2.602a.75.75 0 0 0-.983-1.134l-1.706 1.478V4a.75.75 0 0 0-1.5 0v5.853zM21 19.075a.75.75 0 1 0 0-1.5H3.167a.75.75 0 1 0 0 1.5H21z"></path>
            </svg>
          </span>
          <span>{weather.sunsetTime}</span>
        </div>
      </div>
    </div>
  );
};

export default SunriseSunsetArc;

// Example usage with hardcoded sunrise & sunset times (Replace with API data)
// export default function App() {
//   return (
//     <SunriseSunsetArc
//       sunrise="2025-03-10T06:30:00Z"
//       sunset="2025-03-10T18:29:00Z"
//     />
//   );
// }
