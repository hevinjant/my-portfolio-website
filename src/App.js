import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Projects from "./components/Projects";
import Experiences from "./components/Experiences";
import About from "./components/About";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Projects />
      <Experiences />
      <About />
      <Footer />
    </div>
  );
}

export default App;
