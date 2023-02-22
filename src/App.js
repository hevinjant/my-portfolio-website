import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Main from "./components/Main";
import SpottemInfo from "./components/SpottemInfo";
import { Route, Routes } from "react-router-dom";
import "./App.css";

const paths = {
  local: {
    home: "/",
    spottem: "/spottem",
  },
  deployed: {
    home: "/my-portfolio-website/",
    spottem: "/my-portfolio-website/spottem",
  },
};

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path={paths.deployed.home} exact element={<Main />} />
        <Route
          path={paths.deployed.spottem}
          exact
          element={
            <>
              <SpottemInfo />
            </>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
