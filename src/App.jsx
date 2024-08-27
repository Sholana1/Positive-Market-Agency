import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";

const App = () => {
  return (
    <div className="font-primary">
      <Navbar />
      <Hero />
      <Services />
    </div>
  );
};

export default App;
