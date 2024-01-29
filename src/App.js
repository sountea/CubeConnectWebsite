import "./App.css";
import Hero from "./components/HeroSection/Hero";
import ToolsAndLangages from "./components/ToolsAndLangagesSection/ToolsAndLangages";
import ProductionProcess from "./components/productionProcess/ProductionProcess";
import Database from "./components/DatabaseSection/Database";

function App() {
  return (
    <div className="App px-10 bg-black h-screen m-0">
      <Hero />
      <ToolsAndLangages />
      <ProductionProcess />
      <Database />
    </div>
  );
}

export default App;
