import React from "react";
import About from "./pages/About";
import Home from "./pages/Home";
import MyNavbar from "./components/common/MyNavbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import SearchFilter from "./pages/SearchFilter";
import GetApi from "./pages/GetApi";
import GetApiFetch from "./pages/GetApiFetch";
import GetApiAxios from "./pages/GetApiAxios";
import FormValidation from "./pages/FormValidation";
import UseMemoHook from "./pages/UseMemoHook";
import CodePreview from "./pages/CodePreview";

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
          <Route path="/searchFilter" element={<SearchFilter />} />
          <Route path="/GetApi" element={<GetApi />} />
          <Route path="/GetApiFetch" element={<GetApiFetch />} />
          <Route path="/GetApiAxios" element={<GetApiAxios />} />
          <Route path="/FormValidation" element={<FormValidation />} />
          <Route path="/UseMemoHook" element={<UseMemoHook />} />
          <Route path="/CodePreview" element={<CodePreview />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
