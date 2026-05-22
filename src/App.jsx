import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import SkillCards from "./components/SkillCards";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="bg-[#080d1a] min-h-screen w-full pt-14">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <SkillCards />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
