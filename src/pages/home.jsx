

import { ShootingStarsAndStarsBackgroundDemo } from "../assets/starsBackgroundCompiler";

export function HomePage() {
  return (
    <>
      <div className="absolute inset-0 -z-10">
        <ShootingStarsAndStarsBackgroundDemo />
      </div>

      <div className="flex items-center justify-center relative z-10 h-[80vh] w-full">
        <span className="text-[190px] text-gray-300 neon">VAGABOND</span>
      </div>
    </>
  );
}
