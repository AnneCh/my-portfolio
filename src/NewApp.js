// Simple Home Page that sends the visitor to one of 3 options:
    // - developer
    // - multimedia
    // - contact
// build path using what I've done so far 

import React from "react";
import About from "./components/About";
import Developper from "./Developper";
import Multimedia from "./Multimedia";
import Contact from "./components/Contact";


export default function App() {
  return (
    <main className="text-gray-400 bg-gray-900 body-font">
      <About />
      <Developper />
      <Multimedia />
      <Contact />
    </main>
  );
}
