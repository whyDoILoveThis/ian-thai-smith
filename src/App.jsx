import Hero from "./components/Hero/Hero";
import NavBar from "./components/NavBar/NavBar";
import Skills from "./components/Skills/Skills";

const App = () => {
  return (
    <div className="app">
      <NavBar />
      <Hero />
      <Skills />
    </div>
  );
};

export default App;
