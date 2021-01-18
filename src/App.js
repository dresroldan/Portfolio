import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Hero from "./components/Hero/Hero";
import ProjectCardGrid from "./components/ProjectCardGrid/ProjectCardGrid";
import About from "./components/About/About.js";
import Container from "@material-ui/core/Container";

function App() {
  return (
    <div className="App">
      <Container maxWidth="lg">
        <Navbar />
        <Hero />
        <About />
        <ProjectCardGrid />
        <Footer />
      </Container>
    </div>
  );
}

export default App;


