import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Home from "./pages/Home";
import Partners from "./pages/Partners";
import Contact from "./pages/Contact";
import Credit from "./pages/Credit";

import "./App.css";
// import Header from "./components/Header";
// import Footer from "./components/Footer";

export default function App() {
  return (
    <Router>
      {/* <Header /> */}
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/partners">Partners</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        <li>
          <Link to="/credit">Credit</Link>
        </li>
      </ul>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/partners" element={<Partners />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/credit" element={<Credit />} />
      </Routes>
      {/* <Footer /> */}
    </Router>
  );
}



