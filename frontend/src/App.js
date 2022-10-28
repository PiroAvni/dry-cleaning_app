/** @format */

import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header/NavBar";
import "./App.css";
import Hero from "./components/Home/Hero";
import About from "./components/Home/About";
import Services from "./components/Home/Services";
import Pricing from "./components/Pricing/Pricing";
import HowWeWork from "./components/Home/HowWeWork";
import Booking_Banner from "./components/Home/Booking_Banner";
import Subscriber from "./components/Home/Subscriber";
import Reviews from "./components/Home/Reviews";
import Footer from "./components/Home/Footer";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route
            exact
            path="/"
            element={
              <>
                <Header />
                <Hero />
                <About />
                <Services />
                <HowWeWork />
                <Booking_Banner />
                <Subscriber />
                <Reviews />
                <Footer />
              </>
            }
          ></Route>

          <Route
            exact
            path="/Services"
            element={
              <>
                <Header />
                <Services />
              </>
            }
          ></Route>
          <Route
            exact
            path="/Pricing"
            element={
              <>
                <Header />
                <Pricing />
              </>
            }
          ></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
