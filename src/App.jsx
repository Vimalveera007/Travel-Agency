import { useState } from "react";
import "./App.css";
import Navbar from "./Navbar/Navbar";

import { BrowserRouter,Routes, Route } from "react-router-dom";

import About from "./About/About";
import Home from "./Home/Home";
import Blog from "./Navbar/Blog/Blog";
import Contact from "./Navbar/Contact/Contact";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
