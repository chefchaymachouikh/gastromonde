import React from "react";
import { Routes, Route } from "react-router-dom";
import About from "./pages/About";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Countries from "./pages/Countries";
import Recipe from "./pages/RecipeDetails";
import Recipes from "./pages/Recipes";
import Discover from "./pages/DiscoverPage";



export default function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/countries" element={<Countries />} />
        <Route path="/recipes" element={<Recipes />} />
        <Route path="/recipe/:dish" element={<Recipe />} />
        <Route path="/about" element={<About />} />
       <Route path="/discover" element={<Discover />} />

        
      </Routes>

      <Footer />
    </>
  );
}
