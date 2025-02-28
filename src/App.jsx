import Body from "./components/Body";
import { BrowserRouter, Routes, Route } from "react-router";
import Today from "./components/Today";
import FiveDays from "./components/FiveDays";
import WeatherMap from "./components/WeatherMap";

function App() {
  return (
    <>
      <BrowserRouter basename="/">
        <Routes>
          <Route path="/" element={<Body />}>
            <Route index element={<Today />} />
            <Route path="/five-days" element={<FiveDays />} />
            <Route path="/weather-map" element={<WeatherMap />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

//className="bg-[#e2d4ff] grid min-h-screen"
