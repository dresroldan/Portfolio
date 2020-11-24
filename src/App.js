import "./App.css";
import Header from './components/Header'
import StickyFooter from './components/StickyFooter'
import Hero from './components/Hero'
import Projects from './components/Projects'
function App() {
  return (
    <div className="App">
    <Header/>
    <Hero/>
    <Projects/>
    <StickyFooter/>
    </div>
  );
}

export default App;
