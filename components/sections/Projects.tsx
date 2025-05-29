"use client";

import { useRef, useEffect } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ExternalLink, Github } from "lucide-react";
import { useInViewAnimation } from "@/components/hooks/useInViewAnimation";

interface Project {
  title: string;
  description: string;
  image: string;
  tags: string[];
  liveUrl?: string;
  githubUrl?: string;
}

const projects: Project[] = [
  {
    title: "E-Commerce Platform",
    description: "A full-stack e-commerce platform with product management, cart functionality, and payment processing.",
    image: "https://images.pexels.com/photos/3182773/pexels-photo-3182773.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    tags: ["React", "Node.js", "MongoDB", "Stripe"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Task Management App",
    description: "A responsive task management application with drag-and-drop functionality and team collaboration features.",
    image: "https://images.pexels.com/photos/6146929/pexels-photo-6146929.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    tags: ["React", "TypeScript", "Firebase"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Weather Dashboard",
    description: "An interactive weather dashboard that displays current conditions and forecasts for any location.",
    image: "https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    tags: ["JavaScript", "WeatherAPI", "Chart.js"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Portfolio Generator",
    description: "A tool that helps developers create professional portfolios by importing their GitHub repositories.",
    image: "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    tags: ["Next.js", "GitHub API", "Tailwind CSS"],
    liveUrl: "#",
    githubUrl: "#",
  }
];

interface ProjectCardProps {
  project: Project;
  index: number;
}

function ProjectCard({ project, index }: ProjectCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  useInViewAnimation(cardRef, { rootMargin: "0px 0px -100px 0px", threshold: 0.1 });

  return (
    <div 
      ref={cardRef}
      className={cn(
        "group relative overflow-hidden opacity-0 translate-y-8 project-card rounded-2xl",
        "transition-all duration-700 ease-out",
        `delay-[${index * 150}ms]`
      )}
    >
      <div className="relative h-[400px] overflow-hidden rounded-2xl">
        <Image
          src={project.image}
          alt={project.title + ' screenshot'}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105 rounded-2xl"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          priority={index === 0}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="absolute bottom-0 left-0 right-0 p-6">
            <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
            <p className="text-white/80 mb-4">{project.description}</p>
            
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tags.map((tag, i) => (
                <span key={i} className="text-xs px-2 py-1 bg-white/10 text-white rounded">
                  {tag}
                </span>
              ))}
            </div>
            
            <div className="flex gap-3">
              {project.liveUrl && (
                <Button
                  size="sm"
                  className="animated-gradient-border bg-black text-white border-none rounded-2xl gap-1"
                  asChild
                >
                  <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="h-4 w-4" />
                    Live Demo
                  </a>
                </Button>
              )}
              {project.githubUrl && (
                <Button variant="secondary" size="sm" className="gap-1 text-white" asChild>
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                    <Github className="h-4 w-4" />
                    Code
                  </a>
                </Button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  const headingRef = useRef<HTMLHeadingElement>(null);
  const textRef = useRef<HTMLParagraphElement>(null);

  useInViewAnimation(headingRef, { rootMargin: "0px 0px -100px 0px", threshold: 0.1 });
  useInViewAnimation(textRef, { rootMargin: "0px 0px -100px 0px", threshold: 0.1 });

  return (
    <section id="projects" className="py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto mb-16 md:mb-24">
          <div className="h-1 gradient-le-mans w-20 mb-8"></div>
          <h2 
            ref={headingRef}
            className={cn(
              "text-3xl md:text-5xl font-bold tracking-tighter mb-6 opacity-0 translate-y-8",
              "transition-all duration-700 ease-out"
            )}
          >
            Featured Projects
          </h2>
          <p 
            ref={textRef}
            className={cn(
              "text-lg text-muted-foreground opacity-0 translate-y-8",
              "transition-all duration-700 delay-200 ease-out"
            )}
          >
            A selection of my recent work. Each project represents different challenges and solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}