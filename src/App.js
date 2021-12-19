import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Projects from "./components/Projects";
import Experiences from "./components/Experiences";
import About from "./components/About";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Projects />
      <Experiences />
      <Footer />
    </div>
  );
}

export default App;
