"use client";

import { useRef, useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { Code, Laptop, Terminal, Lightbulb } from "lucide-react";
import { BentoGrid } from "@/components/ui/bento-grid";
import { useInViewAnimation } from "@/components/hooks/useInViewAnimation";
import {
  siPython,
  siJavascript,
  siCplusplus,
  siGo,
  siReact,
  siNextdotjs,
  siSpring,
  siNodedotjs,
  siGit,
  siAmazonwebservices,
  siDocker,
  siLinux,
  siPostgresql,
  siMysql,
  siMongodb,
  siSqlite,
} from "simple-icons";

interface SkillItemProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  delay: number;
}

function SkillItem({ title, description, icon, delay }: SkillItemProps) {
  const itemRef = useRef<HTMLDivElement>(null);
  useInViewAnimation(itemRef, { rootMargin: "0px 0px -100px 0px", threshold: 0.1 });

  return (
    <div 
      ref={itemRef}
      className={cn(
        "border p-6 rounded-lg transition-all duration-700 opacity-0 translate-y-8",
        `delay-[${delay}ms]`
      )}
    >
      <div className="mb-4 p-2 w-fit rounded-md bg-primary/10">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </div>
  );
}

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const textRef = useRef<HTMLParagraphElement>(null);

  useInViewAnimation(headingRef, { rootMargin: "0px 0px -100px 0px", threshold: 0.1 });
  useInViewAnimation(textRef, { rootMargin: "0px 0px -100px 0px", threshold: 0.1 });

  // Tooltip hover state for each row
  const [hoveredLang, setHoveredLang] = useState<number | null>(null);
  const [hoveredFramework, setHoveredFramework] = useState<number | null>(null);
  const [hoveredTool, setHoveredTool] = useState<number | null>(null);
  const [hoveredDatabase, setHoveredDatabase] = useState<number | null>(null);

  const langIcons = [siPython, siJavascript, siCplusplus, siGo];
  const frameworkIcons = [siReact, siNextdotjs, siSpring, siNodedotjs];
  const toolIcons = [siGit, siLinux, siAmazonwebservices, siDocker];
  const databaseIcons = [siPostgresql, siMysql, siMongodb, siSqlite];

  const areas = [
    {
      title: "Languages",
      description: "Languages I use professionally and for personal projects.",
      icon: null,
      delay: 300,
      content: (
        <div className="flex flex-wrap gap-4 justify-center items-center mt-4">
          {langIcons.map((icon, i) => (
            <span
              key={icon.title}
              className="relative cursor-pointer"
              onMouseEnter={() => setHoveredLang(i)}
              onMouseLeave={() => setHoveredLang(null)}
            >
              <span
                dangerouslySetInnerHTML={{
                  __html: icon.svg.replace(
                    '<svg',
                    `<svg width=\"36\" height=\"36\" fill=\"#${icon.hex}\"`
                  ),
                }}
              />
              {hoveredLang === i && (
                <span
                  className="absolute left-1/2 -translate-x-1/2 bottom-full mb-2 px-2 py-1 rounded bg-black text-white text-xs opacity-100 transition-opacity whitespace-nowrap z-20 shadow-lg"
                  style={{ fontFamily: 'Space Grotesk, sans-serif' }}
                >
                  {icon.title}
                </span>
              )}
            </span>
          ))}
        </div>
      ),
    },
    {
      title: "Frameworks",
      description: "Frameworks and libraries I build with.",
      icon: null,
      delay: 400,
      content: (
        <div className="flex flex-wrap gap-4 justify-center items-center mt-4">
          {frameworkIcons.map((icon, i) => (
            <span
              key={icon.title}
              className="relative cursor-pointer"
              onMouseEnter={() => setHoveredFramework(i)}
              onMouseLeave={() => setHoveredFramework(null)}
            >
              <span
                dangerouslySetInnerHTML={{
                  __html: icon.svg.replace(
                    '<svg',
                    `<svg width=\"36\" height=\"36\" fill=\"#${icon.hex}\"`
                  ),
                }}
              />
              {hoveredFramework === i && (
                <span
                  className="absolute left-1/2 -translate-x-1/2 bottom-full mb-2 px-2 py-1 rounded bg-black text-white text-xs opacity-100 transition-opacity whitespace-nowrap z-20 shadow-lg"
                  style={{ fontFamily: 'Space Grotesk, sans-serif' }}
                >
                  {icon.title}
                </span>
              )}
            </span>
          ))}
        </div>
      ),
    },
    {
      title: "Tools",
      description: "My daily drivers for development and deployment.",
      icon: null,
      delay: 500,
      content: (
        <div className="flex flex-wrap gap-4 justify-center items-center mt-4">
          {toolIcons.map((icon, i) => (
            <span
              key={icon.title}
              className="relative cursor-pointer"
              onMouseEnter={() => setHoveredTool(i)}
              onMouseLeave={() => setHoveredTool(null)}
            >
              <span
                dangerouslySetInnerHTML={{
                  __html: icon.svg.replace(
                    '<svg',
                    `<svg width=\"36\" height=\"36\" fill=\"#${icon.hex}\"`
                  ),
                }}
              />
              {hoveredTool === i && (
                <span
                  className="absolute left-1/2 -translate-x-1/2 bottom-full mb-2 px-2 py-1 rounded bg-black text-white text-xs opacity-100 transition-opacity whitespace-nowrap z-20 shadow-lg"
                  style={{ fontFamily: 'Space Grotesk, sans-serif' }}
                >
                  {icon.title}
                </span>
              )}
            </span>
          ))}
        </div>
      ),
    },
    {
      title: "Databases",
      description: "Databases I use for projects and production.",
      icon: null,
      delay: 600,
      content: (
        <div className="flex flex-wrap gap-4 justify-center items-center mt-4">
          {databaseIcons.map((icon, i) => (
            <span
              key={icon.title}
              className="relative cursor-pointer"
              onMouseEnter={() => setHoveredDatabase(i)}
              onMouseLeave={() => setHoveredDatabase(null)}
            >
              <span
                dangerouslySetInnerHTML={{
                  __html: icon.svg.replace(
                    '<svg',
                    `<svg width=\"36\" height=\"36\" fill=\"#${icon.hex}\"`
                  ),
                }}
              />
              {hoveredDatabase === i && (
                <span
                  className="absolute left-1/2 -translate-x-1/2 bottom-full mb-2 px-2 py-1 rounded bg-black text-white text-xs opacity-100 transition-opacity whitespace-nowrap z-20 shadow-lg"
                  style={{ fontFamily: 'Space Grotesk, sans-serif' }}
                >
                  {icon.title}
                </span>
              )}
            </span>
          ))}
        </div>
      ),
    },
  ];

  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-20 md:py-32 bg-muted/30 relative overflow-hidden"
    >
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto mb-16 md:mb-24 text-center">
          <h2 
            ref={headingRef}
            className={cn(
              "text-3xl md:text-5xl font-bold tracking-tighter mb-6 opacity-0 translate-y-8",
              "transition-all duration-700 ease-out"
            )}
          >
            About Me
          </h2>
          <p 
            ref={textRef}
            className={cn(
              "text-lg text-muted-foreground opacity-0 translate-y-8",
              "transition-all duration-700 delay-200 ease-out"
            )}
          >
            I&apos;m a third-year Computer Science student at the University of Houston with a passion for web development and design. My approach combines technical expertise with an eye for clean, minimalist aesthetics inspired by Swiss design principles. I&apos;m constantly exploring new technologies and techniques to create engaging digital experiences.
          </p>
        </div>

        <BentoGrid
          items={areas.map(({ title, description, content, delay }) => ({
            title,
            description,
            content,
            className: "min-h-[260px] flex flex-col justify-between",
          }))}
        />
      </div>
    </section>
  );
}