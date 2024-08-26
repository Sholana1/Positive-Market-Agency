import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";

const App = () => {
  return (
    <div className="font-primary">
      <Navbar />
      <Hero />
    </div>
  );
};

export default App;
