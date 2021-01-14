import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Hero from "./components/hero/Hero";
import ProjectCardGrid from "./components/projectcardgrid/ProjectCardGrid";
import About from "./components/about/About.js";
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


