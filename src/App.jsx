import Body from "./components/Body";
import { BrowserRouter, Routes, Route } from "react-router";
import Today from "./pages/Today";
import FiveDays from "./pages/FiveDays";
import WeatherMap from "./pages/WeatherMap";

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
