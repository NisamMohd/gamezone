import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";

function Home() {
  return (
    <div>
      <div className="h-screen flex flex-col">
        <Navbar />
        <Hero />
      </div>
    </div>
  );
}

export default Home;
