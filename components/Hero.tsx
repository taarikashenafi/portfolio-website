import React from 'react'
import { words } from "@/data/index";
import { FlipWords } from "./ui/flip-words";
import MagicButton from "./MagicButton";
import { FaLocationArrow } from "react-icons/fa6";
import { BackgroundLines } from "./ui/background-lines";


const Hero = () => {
  return (
    <div className="relative w-full h-screen bg-cover bg-no-repeat bg-fixed">
      <BackgroundLines>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <h2 className="text-white text-2xl md:text-6xl font-bold text-center">
            Hi I'm Taarik, a <FlipWords words={words} color="#E33333" />.
          </h2>
          <p className="text-white-200 text-sm md:text-2xl max-w-xl mt-6 text-center">
            Let me tell you a little bit about myself
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center mt-10">
            <a href="#projects">
              <MagicButton
                title="Explore my work"
                icon={<FaLocationArrow />}
                position="right"
              />
            </a>
          </div>
        </div>
      </BackgroundLines>
    </div>
  );
}
export default Hero

