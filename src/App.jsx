// import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import About from "./components/About";
import Project from "./components/Project";
import Skills from "./components/Skill";
import Contact from "./components/Contact";
import Hero from "./components/hero";
import "./App.css";

function App() {
  return (
    <>
      <main className="bg-[#000000]">
        <Navbar />
        <section className="rounded-xl bg-[#0b0b0c] w-[95%] mx-auto mt-[20px] mb-[20px] p-4">
          <Hero />
          <About />
          <Project />
          <Skills />
          <Contact />
        </section>
        <Footer />
      </main>
    </>
  );
}

export default App;
