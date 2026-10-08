"use client";

import { useEffect } from "react";

export default function ScrollObserver() {
  useEffect(() => {
    // 1. Scroll progress bar fallback
    if (typeof window !== "undefined" && !CSS.supports("animation-timeline", "scroll()")) {
      const pb = document.querySelector("#scroll-progress") as HTMLElement;
      if (pb) {
        const handleScroll = () => {
          const scrollable = document.documentElement.scrollHeight - window.innerHeight;
          const scrolled = window.scrollY;
          const pct = scrollable > 0 ? scrolled / scrollable : 0;
          pb.style.transform = `scaleX(${pct})`;
        };
        window.addEventListener("scroll", handleScroll);
        // Run once initially
        handleScroll();
        return () => window.removeEventListener("scroll", handleScroll);
      }
    }
  }, []);

  useEffect(() => {
    // 2. Sticky header fallback
    if (typeof window !== "undefined" && !CSS.supports("animation-timeline", "scroll()")) {
      const header = document.querySelector(".sticky-header") as HTMLElement;
      if (header) {
        const handleScroll = () => {
          if (window.scrollY > 40) {
            header.style.backgroundColor = "rgba(249, 246, 243, 0.85)";
            header.style.backdropFilter = "blur(16px)";
            header.style.boxShadow = "0 4px 20px -2px rgba(94, 46, 31, 0.08)";
            header.style.paddingBlock = "0.75rem";
          } else {
            header.style.backgroundColor = "transparent";
            header.style.backdropFilter = "none";
            header.style.boxShadow = "none";
            header.style.paddingBlock = "1.25rem";
          }
        };
        window.addEventListener("scroll", handleScroll);
        // Run once initially
        handleScroll();
        return () => window.removeEventListener("scroll", handleScroll);
      }
    }
  }, []);

  useEffect(() => {
    // 3. Section Reveal fallback (using IntersectionObserver)
    if (typeof window !== "undefined" && !CSS.supports("(animation-timeline: view()) and (animation-range: entry)")) {
      const revealElements = document.querySelectorAll(".reveal-section") as NodeListOf<HTMLElement>;
      
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const target = entry.target as HTMLElement;
              target.style.opacity = "1";
              target.style.transform = "translateY(0) scale(1)";
              target.style.transition = "opacity 0.8s ease-out, transform 0.8s ease-out";
            }
          });
        },
        { threshold: 0.1 }
      );

      revealElements.forEach((el) => {
        // Set initial state post-hydration
        el.style.opacity = "0";
        el.style.transform = "translateY(40px) scale(0.98)";
        observer.observe(el);
      });

      return () => {
        revealElements.forEach((el) => observer.unobserve(el));
      };
    }
  }, []);

  return null;
}
