import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Slider from "../components/Slider";
import {items} from "../constants/Items"

function Home() {
  return (
    <div>
      <div className="h-screen flex flex-col">
        <Navbar />
        <Hero />
        <Slider title="Plastations" items={items}/>
        <Slider title="Consoles" items={items}/>
        <Slider title="Accessories" items={items}/>
      </div>
    </div>
  );
}

export default Home;
