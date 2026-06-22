import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Slider from "../components/Slider";
import { items } from "../constants/Items";

function Home() {
  return (
    <div>
      <div className="h-screen flex flex-col">
        <Navbar />
        <Hero />
        <div className="py-4 bg-slate-200">
          <Slider title="Playstations" items={items} />
          <Slider title="Consoles" items={items} />
          <Slider title="Accessories" items={items} />
        </div>
      </div>
    </div>
  );
}

export default Home;
