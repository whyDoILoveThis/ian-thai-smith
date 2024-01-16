import Hero from "./components/Hero/Hero";
import MyProjects from "./components/MyProjects/MyProjects";
import NavBar from "./components/NavBar/NavBar";
import Skills from "./components/Skills/Skills";

const App = () => {
  return (
    <div className="app">
      <NavBar />
      <Hero />
      <Skills />
      <MyProjects />
    </div>
  );
};

export default App;
