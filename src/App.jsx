import React from "react";
import Hero from "./components/Hero";
import About from "./components/About";
import Project from "./components/Project";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div>
      <Hero />
      <About />
      <Project />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
