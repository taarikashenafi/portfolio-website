"use client";

import { useRef, useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { 
  Form, 
  FormControl, 
  FormField, 
  FormItem, 
  FormLabel, 
  FormMessage 
} from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Send, CheckCircle } from "lucide-react";
import { Globe } from "@/components/magicui/Globe";

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  message: z.string().min(10, {
    message: "Message must be at least 10 characters.",
  }),
});

export default function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const textRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-in");
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -100px 0px" }
    );

    const currentHeadingRef = headingRef.current;
    const currentTextRef = textRef.current;
    if (currentHeadingRef) observer.observe(currentHeadingRef);
    if (currentTextRef) observer.observe(currentTextRef);

    return () => {
      if (currentHeadingRef) observer.unobserve(currentHeadingRef);
      if (currentTextRef) observer.unobserve(currentTextRef);
    };
  }, []);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    setTimeout(() => {
      setIsSubmitted(true);
      form.reset();
    }, 1000);
  }

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="py-20 md:py-32 bg-muted/30"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24">
          <div>
            <h2 
              ref={headingRef}
              className={cn(
                "text-3xl md:text-5xl font-bold tracking-tighter mb-6 opacity-0 translate-y-8",
                "transition-all duration-700 ease-out"
              )}
            >
              Get In Touch
            </h2>
            <p 
              ref={textRef}
              className={cn(
                "text-lg text-muted-foreground mb-8 opacity-0 translate-y-8",
                "transition-all duration-700 delay-200 ease-out"
              )}
            >
              I'm actively seeking internship opportunities to gain practical experience in the field. If you have any questions or would like to discuss potential opportunities, feel free to reach out.
            </p>
            
            <div className="space-y-4">
              <div className="flex flex-col">
                <span className="text-sm font-medium uppercase tracking-wider mb-1">Email</span>
                <a href="mailto:taarikashenafi@gmail.com" className="text-lg hover:gradient-text-le-mans">
                  taarikashenafi@gmail.com
                </a>
              </div>
              <div className="flex flex-col">
                <span className="text-sm font-medium uppercase tracking-wider mb-1">Location</span>
                <h3 className="text-lg">Dallas, Texas</h3>
              </div>
            </div>
          </div>
          
          <div className="bg-background border rounded-2xl p-6 md:p-8 min-h-[400px] flex items-center justify-center">
            {/* Interactive Globe focused on Dallas, Texas */}
            <div className="w-full h-[350px] rounded-2xl overflow-hidden flex items-center justify-center">
              <Globe width={340} height={340} markers={[{ location: [32.7767, -96.797], size: 0.15 }]} focus={[32.7767, -96.797]} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}