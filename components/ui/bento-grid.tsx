"use client";
import React from "react";
import { cn } from "@/lib/utils";

export interface BentoGridItem {
  title: string;
  description: string;
  icon?: React.ReactNode;
  className?: string;
  header?: React.ReactNode;
  content?: React.ReactNode;
}

export function BentoGrid({ items, className }: { items: BentoGridItem[]; className?: string }) {
  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full mx-auto",
        className
      )}
    >
      {items.map((item, i) => (
        <BentoGridItemComponent key={i} {...item} />
      ))}
    </div>
  );
}

function BentoGridItemComponent({ title, description, icon, className, header, content }: BentoGridItem) {
  return (
    <div
      className={cn(
        "group relative bg-background border border-border rounded-2xl p-6 shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105 hover:shadow-2xl flex flex-col gap-4 text-foreground",
        "hover:border-primary/60 hover:bg-primary/5",
        className
      )}
    >
      {icon && <div className="mb-2 text-primary/80">{icon}</div>}
      {header && <div className="mb-2 font-bold text-lg text-primary/90">{header}</div>}
      <h3 className="text-xl font-semibold mb-1">{title}</h3>
      <p className="text-muted-foreground mb-2 flex-1">{description}</p>
      {content && <div className="mt-2">{content}</div>}
    </div>
  );
} 