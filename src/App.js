import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Hero from "./components/Hero/Hero";
import ProjectCardGrid from "./components/ProjectCardGrid/ProjectCardGrid";
import About from "./components/About/About.js";
import Skills from "./components/Skills/Skills.js";
import Container from "@material-ui/core/Container";

function App() {
  return (
    <div className="App">
      <Container maxWidth="lg">
        <Navbar />
        <Hero />
        <About />
        <Skills />
        <ProjectCardGrid />
        <Footer />
      </Container>
    </div>
  );
}

export default App;
