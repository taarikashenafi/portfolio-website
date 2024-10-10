import React from 'react'
import { WavyBackground } from "./ui/wavy-background";
import { words } from "@/data/index";
import { FlipWords } from "./ui/flip-words";
import MagicButton from "./MagicButton";
import { FaLocationArrow } from "react-icons/fa6";

const Hero = () => {
  return (
    <div className="w-[calc(100%-4rem)] mx-auto rounded-md  h-screen ">
      <WavyBackground>
        <h2 className="text-white text-2xl md:text-6xl font-bold text-center">
          Hi I&apos;m Taarik, a <FlipWords words={words} color="#E33333"/>.
        </h2>

        <p className="text-white-200 text-sm md:text-2xl max-w-xl mt-6 text-center">
          let me tell you a little bit about myself
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center mt-200">
        <a href="#projects">
          <MagicButton
            title="Explore my work"
            icon={<FaLocationArrow />}
            position="right"
          />
        </a>
        </div>
      </WavyBackground>
    </div>
  )
}

export default Hero