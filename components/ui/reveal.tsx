"use client";

import type { CSSProperties, HTMLAttributes, ReactNode } from "react";
import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

type RevealProps = HTMLAttributes<HTMLDivElement> & {
  children: ReactNode;
  delay?: number;
};

const observedElements = new WeakMap<Element, () => void>();
let sharedObserver: IntersectionObserver | null = null;

function getSharedObserver() {
  if (!sharedObserver) {
    sharedObserver = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) {
            continue;
          }

          observedElements.get(entry.target)?.();
          observedElements.delete(entry.target);
          sharedObserver?.unobserve(entry.target);
        }
      },
      { rootMargin: "0px 0px -10% 0px", threshold: 0.08 }
    );
  }

  return sharedObserver;
}

export function Reveal({ children, className, delay = 0, style, ...props }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;

    if (!node || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setIsVisible(true);
      return;
    }

    observedElements.set(node, () => setIsVisible(true));
    getSharedObserver().observe(node);

    return () => {
      observedElements.delete(node);
      sharedObserver?.unobserve(node);
    };
  }, []);

  return (
    <div
      className={cn("reveal-on-scroll", isVisible && "is-visible", className)}
      ref={ref}
      style={{ "--reveal-delay": `${delay}ms`, ...style } as CSSProperties}
      {...props}
    >
      {children}
    </div>
  );
}
