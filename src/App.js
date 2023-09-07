import React from "react";
import Navbar from "./components/Navbar";
import AboutMe from "./components/AboutMe";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import PortfolioContainer from "./components/PortfolioContainer";

function App() {
  return (
    <div className="App">
      <PortfolioContainer />
      {/* <Navbar />
      <AboutMe /> 
      <Portfolio />
      <Contact />
      <Footer /> */}
    </div>
  );
}

export default App;