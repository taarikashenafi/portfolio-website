"use client";

import { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { Canvas, useFrame } from "@react-three/fiber";
import { Environment } from "@react-three/drei";
import dynamic from "next/dynamic";

// @ts-ignore
const Model = dynamic(() => import("../3d/911.jsx"), { ssr: false });

function SpinningModel(props: any) {
  const ref = useRef<any>();
  const [hovered, setHovered] = useState(false);
  useFrame(() => {
    if (ref.current) {
      ref.current.rotation.y += hovered ? 0.002 : 0.007;
    }
  });
  return (
    <group
      ref={ref}
      scale={[1.1, 1.1, 1.1]}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
    >
      <Model {...props} />
    </group>
  );
}

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center">
      
      <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <div className="h-1 w-20 gradient-le-mans"></div>
              <h1 className="text-[clamp(3rem,8vw,6rem)] font-bold leading-none tracking-tighter">
                <span className="block text-5xl md:text-6xl tracking-wide">TAARIK</span>
                <span className="block gradient-text-le-mans text-5xl md:text-6xl tracking-wide">ASHENAFI</span>
              </h1>
            </div>
            
            <p className="text-xl text-muted-foreground max-w-lg">
              CS @ University of Houston
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Button
                size="lg"
                className="animated-gradient-border bg-black text-white border-none rounded-2xl px-8 py-3 font-medium"
                asChild
              >
                <a href="#projects" className="relative z-10">
                  View Projects
                </a>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href="#contact">Get in Touch</a>
              </Button>
            </div>
          </motion.div>

          <div className="relative aspect-square w-full h-full">
            <Canvas
              camera={{ position: [0, 1, 10], fov: 35 }}
              className="!bg-transparent"
              style={{ width: "100%", height: "100%" }}
              gl={{ preserveDrawingBuffer: true, alpha: true }}
            >
              <ambientLight intensity={25} />
              <directionalLight position={[10, 10, 10]} intensity={25} />
              <SpinningModel />
              <Environment preset="city" background={false} />
            </Canvas>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center space-y-2">
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-6 h-10 border-2 rounded-full flex justify-center"
        >
          <div className="w-1 h-2 bg-foreground rounded-full mt-2"></div>
        </motion.div>
        <span className="text-xs uppercase tracking-widest">Scroll</span>
      </div>
    </section>
  );
}