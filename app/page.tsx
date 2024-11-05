"use client";

import { navItems } from "@/data";
import { FloatingNav } from "@/components/ui/floating-navbar";

import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="relative bg-bg-dark flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems} />
        <Hero />
        <About />
        <Projects />
        <Contact />
      </div>
    </main>
  );
}

