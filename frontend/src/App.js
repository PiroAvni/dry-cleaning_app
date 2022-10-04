import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
//import Header from "./components/Header/Header";
import Header from "./components/Header/NavBar";
//import Header from "./components/Header/Header";
import "./App.css";
import Hero from "./components/Home/Hero";
import About from "./components/Home/About";
import Services from "./components/Home/Services";

function App() {
  return (
    <div>
      <Router>
        <Header />
        <Hero />
        <About />
        <Services />
      </Router>
    </div>
  );
}

export default App;
