import React from "react"
import { Route, BrowserRouter, Routes } from "react-router-dom";
import Home from "./pages/home"
import About from "./pages/about"

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about-me" element={<About/>}/>
        <Route path="/*" element={<Home/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default Router;