import React from "react";
import { ShootingStarsAndStarsBackgroundDemo } from "../assets/starsBackgroundCompiler";
import { Navbar } from "../components/navbar";

export function HomePage() {
  return (
    <div className="relative h-screen w-full">
      {/* Star Background Demo */}
      <div className="absolute inset-0 -z-10">
        <ShootingStarsAndStarsBackgroundDemo />
      </div>

      {/* Navbar */}
      <Navbar />

      {/* Main content */}
      <div className="flex items-center justify-center relative z-10 h-[80vh]">
        <span className="text-[190px] text-gray-300 neon">VAGABOND</span>
      </div>
    </div>
  );
}
