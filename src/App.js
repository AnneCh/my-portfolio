
import React from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Tools from "./components/Tools";
import WhatElse from "./components/WhatElse";

export default function App() {
  return (
    <main className="text-gray-400 bg-gray-900 body-font">
      <Navbar />
      <About />
      <Projects />
      <Tools />
      <WhatElse />
      <Contact />
    </main>
  );
}
