import React, { useEffect, useRef, useState } from "react";

const ScrollReveal = ({
  children,
  animation = "fade-in",
  duration = 700,
  delay = 0,
  threshold = 0.1,
  once = true,
  className = "",
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef();

  useEffect(() => {
    // Check for prefers-reduced-motion
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (prefersReducedMotion) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            if (once) observer.unobserve(entry.target);
          } else if (!once) {
            setIsVisible(false);
          }
        });
      },
      { threshold },
    );

    const { current } = domRef;
    if (current) {
      observer.observe(current);
    }

    return () => {
      if (current) {
        observer.unobserve(current);
      }
    };
  }, [once, threshold]);

  const getAnimationStyles = () => {
    const baseStyles = {
      transitionProperty: "opacity, transform",
      transitionDuration: `${duration}ms`,
      transitionDelay: `${delay}ms`,
      transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
      willChange: "opacity, transform",
    };

    const animations = {
      "fade-in": {
        opacity: isVisible ? 1 : 0,
      },
      "slide-up": {
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateY(0)" : "translateY(30px)",
      },
      "slide-down": {
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateY(0)" : "translateY(-30px)",
      },
      "slide-left": {
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateX(0)" : "translateX(30px)",
      },
      "slide-right": {
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateX(0)" : "translateX(-30px)",
      },
      "scale-in": {
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "scale(1)" : "scale(0.95)",
      },
    };

    return {
      ...baseStyles,
      ...(animations[animation] || animations["fade-in"]),
    };
  };

  return (
    <div
      ref={domRef}
      style={getAnimationStyles()}
      className={`reveal-container ${className}`}
    >
      {children}
    </div>
  );
};

export default ScrollReveal;
