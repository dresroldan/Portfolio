import "./App.css";
import Header from "./components/Header";
import StickyFooter from "./components/StickyFooter";
import Hero from "./components/Hero";
import ProjectCard from "./components/ProjectCard";
import About from "./components/About";

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <About />
      <ProjectCard />
      <StickyFooter />
    </div>
  );
}

export default App;
