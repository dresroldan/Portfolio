import Navbar from "./components/navbar/Navbar"
import Footer from "./components/footer/Footer";
import Hero from "./components/hero/Hero";
import ProjectCardGrid from "./components/projectcardgrid/ProjectCardGrid";
import About from "./components/about/About.js";

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
