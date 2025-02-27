import Body from "./components/Body";
import { BrowserRouter, Routes } from "react-router";
import Header from "./components/Header";

function App() {
  return (
    <>
      {/* <BrowserRouter>
        <Routes path="/" element={<Body />}>
          <Route></Route>
        </Routes>
      </BrowserRouter> */}
      <Header />
    </>
  );
}

export default App;

//className="bg-[#e2d4ff] grid min-h-screen"
