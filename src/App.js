import Navbar from "./components/Navbar/Navbar"
import Footer from "./components/Footer/Footer";
import Hero from "./components/Hero/Hero";
import ProjectCardGrid from "./components/ProjectCardGrid/ProjectCardGrid";
import About from "./components/About/About";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <About />
      <ProjectCardGrid />
      <Footer />
    </div>
  );
}

export default App;
