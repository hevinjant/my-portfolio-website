import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Main from "./components/Main";
import SpottemInfo from "./components/SpottemInfo";
import { Route, Routes } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/my-portfolio-website/" exact element={<Main />} />
        <Route
          path="/my-portfolio-website/spottem"
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
