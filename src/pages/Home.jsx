import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Playstation from "../components/ProductSlider";

function Home() {
  return (
    <div>
      <div className="h-screen flex flex-col">
        <Navbar />
        <Hero />
        <Playstation/>
      </div>
    </div>
  );
}

export default Home;
