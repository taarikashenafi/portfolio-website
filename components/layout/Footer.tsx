import { Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="max-w-7xl mx-auto px-4 py-12 md:py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex flex-col space-y-4">
            <h3 className="text-lg font-bold tracking-tighter">Taarik Ashenafi</h3>
            <p className="text-sm text-muted-foreground max-w-xs">
              Web developer and computer science student at University of Houston
            </p>
          </div>
          
          <div className="flex flex-col space-y-4">
            <h3 className="text-sm font-bold uppercase tracking-widest">Links</h3>
            <div className="flex flex-col space-y-2">
              <Link href="#home" className="text-sm transition-colors hover:gradient-text-le-mans">
                Home
              </Link>
              <Link href="#about" className="text-sm transition-colors hover:gradient-text-le-mans">
                About
              </Link>
              <Link href="#projects" className="text-sm transition-colors hover:gradient-text-le-mans">
                Projects
              </Link>
              <Link href="#contact" className="text-sm transition-colors hover:gradient-text-le-mans">
                Contact
              </Link>
            </div>
          </div>
          
          <div className="flex flex-col space-y-4">
            <h3 className="text-sm font-bold uppercase tracking-widest">Connect</h3>
            <div className="flex flex-col space-y-2">
              <a 
                href="https://github.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm transition-colors hover:gradient-text-le-mans"
              >
                <Github className="h-4 w-4" />
                GitHub
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm transition-colors hover:gradient-text-le-mans"
              >
                <Linkedin className="h-4 w-4" />
                LinkedIn
              </a>
              <a 
                href="mailto:example@email.com" 
                className="flex items-center gap-2 text-sm transition-colors hover:gradient-text-le-mans"
              >
                <Mail className="h-4 w-4" />
                Email
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-12 border-t pt-8">
          <p className="text-sm text-muted-foreground text-center">
            © {new Date().getFullYear()} Taarik Ashenafi. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}