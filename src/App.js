import React from "react";
import Navbar from "./components/Navbar";
import AboutMe from "./components/AboutMe";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="App">
      <Navbar />
      <AboutMe /> 
      <Portfolio />
      <Contact />
    </div>
  );
}

export default App;