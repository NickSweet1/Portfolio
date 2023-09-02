import React from "react";
import Navbar from "./components/Navbar";
import AboutMe from "./components/AboutMe";
import Portfolio from "./components/Portfolio";

function App() {
  return (
    <div className="App">
      <Navbar />
      <AboutMe /> 
      <Portfolio />
    </div>
  );
}

export default App;