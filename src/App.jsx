import Navbar from "./components/Navbar";
import Hero from "./components/hero";
import About from "./components/About";
import Skills from "./components/Skills";
import SkillCards from "./components/SkillCards";
import Projects from "./components/Projects";

function App() {
  return (
    <div className="bg-[#080d1a] min-h-screen w-full ">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <SkillCards />
      <Projects />
    </div>
  );
}

export default App;
