import React from 'react';
import { CardSpotlight } from '@/components/ui/card-spotlight';

const About = () => {
  return (
    <section className="relative w-full py-20 bg-cover bg-no-repeat" id="about">
      <div className="max-w-7xl mx-auto flex flex-col items-center text-center px-5">
        <h2 className="text-white text-2xl md:text-6xl font-bold mb-4">
          About <span className="text-[#E33333]">Me</span>
        </h2>
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="max-w-2xl text-white-200 md:text-lg text-base leading-relaxed">
            <CardSpotlight className="text-center mt-10 mb-4">
              I&apos;m Taarik, a computer science student at the <span className="text-[#E33333]">University of Houston</span> who loves to
              build useable and engaging applications. From front-end magic to robust back-end solutions, I enjoy turning ideas into real world solutions.
              When I&apos;m not coding, you&apos;ll probably find me watching soccer passionately, running,or just unwinding with some
              good music. My journey in tech has been about constant learning,
              and I&apos;m always excited about what&apos;s next.
            </CardSpotlight>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
