import "./App.css";
import Header from "./components/Header";
import StickyFooter from "./components/StickyFooter";
import About from "./components/About"

function App() {
  return (
    <div className="App">
      <Header />
<About/>
      <StickyFooter />
    </div>
  );
}

export default App;
