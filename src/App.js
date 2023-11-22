import React from "react";
import About from "./pages/About";
import Home from "./pages/Home";
import MyNavbar from "./components/common/MyNavbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Services from "./pages/Services";
import Contact from "./pages/Contact";

const App = () => {
  return (
    <>
      <BrowserRouter>
      <MyNavbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
