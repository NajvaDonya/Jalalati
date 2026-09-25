"use client";

import {
  useEffect,
  useRef,
  useState,
  type CSSProperties,
  type HTMLAttributes,
  type ReactNode,
} from "react";
import { cn } from "@/lib/utils";

export interface NeonColorsProps {
  firstColor: string;
  secondColor: string;
}

export interface NeonGradientCardProps extends HTMLAttributes<HTMLDivElement> {
  className?: string;
  innerClassName?: string;
  children?: ReactNode;
  borderSize?: number;
  borderRadius?: number;
  neonColors?: NeonColorsProps;
}

export function NeonGradientCard({
  className,
  innerClassName,
  children,
  borderSize = 2,
  borderRadius = 20,
  neonColors = {
    firstColor: "#596575",
    secondColor: "#253041",
  },
  ...props
}: NeonGradientCardProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const updateDimensions = () => {
      if (containerRef.current) {
        const { offsetWidth, offsetHeight } = containerRef.current;
        setDimensions({ width: offsetWidth, height: offsetHeight });
      }
    };

    updateDimensions();
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  useEffect(() => {
    if (containerRef.current) {
      const { offsetWidth, offsetHeight } = containerRef.current;
      setDimensions({ width: offsetWidth, height: offsetHeight });
    }
  }, [children]);

  return (
    <div
      ref={containerRef}
      style={
        {
          "--border-size": `${borderSize}px`,
          "--border-radius": `${borderRadius}px`,
          "--neon-first-color": neonColors.firstColor,
          "--neon-second-color": neonColors.secondColor,
          "--card-width": `${dimensions.width}px`,
          "--card-height": `${dimensions.height}px`,
          "--card-content-radius": `${Math.max(0, borderRadius - borderSize)}px`,
          "--pseudo-element-width": `${dimensions.width + borderSize * 2}px`,
          "--pseudo-element-height": `${dimensions.height + borderSize * 2}px`,
          "--after-blur": `${Math.max(24, dimensions.width / 4)}px`,
        } as CSSProperties
      }
      className={cn("relative z-10 size-full rounded-(--border-radius)", className)}
      {...props}
    >
      <div
        className={cn(
          "relative size-full min-h-[inherit] overflow-hidden rounded-(--card-content-radius) bg-transparent p-0",
          "before:absolute before:-top-(--border-size) before:-left-(--border-size) before:-z-10 before:block",
          "before:h-(--pseudo-element-height) before:w-(--pseudo-element-width) before:rounded-(--border-radius) before:content-['']",
          "before:bg-[linear-gradient(0deg,var(--neon-first-color),var(--neon-second-color))] before:bg-size-[100%_200%]",
          "before:animate-background-position-spin",
          "after:absolute after:-top-(--border-size) after:-left-(--border-size) after:-z-10 after:block",
          "after:h-(--pseudo-element-height) after:w-(--pseudo-element-width) after:rounded-(--border-radius) after:blur-(--after-blur) after:content-['']",
          "after:bg-[linear-gradient(0deg,var(--neon-first-color),var(--neon-second-color))] after:bg-size-[100%_200%] after:opacity-50",
          "after:animate-background-position-spin",
          innerClassName,
        )}
      >
        {children}
      </div>
    </div>
  );
}
