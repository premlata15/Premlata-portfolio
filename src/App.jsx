import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";

function App() {
  const [dark, setDark] = useState(false);

  return (
    <div className={dark ? "dark" : ""}>
      <div className="bg-white dark:bg-slate-900 text-gray-900 dark:text-white transition-colors duration-500">
        <Navbar dark={dark} setDark={setDark} />
        <Hero />
        <About />
        <Skills />
        <Projects />
      </div>
    </div>
  );
}

export default App;
