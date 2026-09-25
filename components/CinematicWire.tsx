"use client";

import { memo, type CSSProperties } from "react";
import type { Composition } from "@/lib/wireComposition";

type CinematicWireProps = {
  composition: Composition;
  phase: "intro" | "idle";
  ambient: boolean;
  flip: boolean;
};

const TRAILS = [
  { len: 0.08, color: "#F5C400", opacity: 0.14, widthScale: 1.15 },
  { len: 0.05, color: "#F5C400", opacity: 0.75, widthScale: 0.38 },
  { len: 0.02, color: "#FFF8DC", opacity: 1, widthScale: 0.16 },
] as const;

function CinematicWireImpl({ composition, phase, ambient, flip }: CinematicWireProps) {
  const { viewBox, d, stroke: w, tip } = composition;
  const [vw, vh] = viewBox;
  const intro = phase === "intro";

  return (
    <svg
      className={`pointer-events-none absolute inset-0 z-10 h-full w-full ${flip ? "-scale-x-100" : ""}`}
      viewBox={`0 0 ${vw} ${vh}`}
      preserveAspectRatio="xMidYMid slice"
      aria-hidden
      style={{ "--ambient-duration": "5.6s" } as CSSProperties}
    >
      <defs>
        <radialGradient id="wire-halo" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#FFF6CC" stopOpacity="0.95" />
          <stop offset="38%" stopColor="#F5C400" stopOpacity="0.4" />
          <stop offset="100%" stopColor="#F5C400" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="copper-body" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#6E3A1C" />
          <stop offset="35%" stopColor="#E9B26A" />
          <stop offset="70%" stopColor="#C07A3E" />
          <stop offset="100%" stopColor="#5E3016" />
        </linearGradient>
      </defs>

      <path data-wire="measure" d={d} fill="none" stroke="none" />

      <path d={d} fill="none" stroke="rgba(23,25,28,0.07)" strokeWidth={w + 14} strokeLinecap="round" strokeLinejoin="round" />
      <path d={d} fill="none" stroke="rgba(23,25,28,0.12)" strokeWidth={w + 6} strokeLinecap="round" strokeLinejoin="round" transform="translate(0 3)" />
      <path d={d} fill="none" stroke="#07080A" strokeWidth={w + 3} strokeLinecap="round" strokeLinejoin="round" />
      <path d={d} fill="none" stroke="#1A1D22" strokeWidth={w} strokeLinecap="round" strokeLinejoin="round" />
      <path
        d={d}
        fill="none"
        stroke="rgba(255,255,255,0.2)"
        strokeWidth={w * 0.2}
        strokeLinecap="round"
        strokeLinejoin="round"
        transform={`translate(${-w * 0.16} ${-w * 0.24})`}
      />

      <path
        data-wire="lit"
        d={d}
        fill="none"
        stroke="#3E4248"
        strokeWidth={w * 0.88}
        strokeLinecap="round"
        strokeLinejoin="round"
        pathLength={1}
        strokeDasharray="1 2"
        strokeDashoffset={intro ? 1 : 0}
      />
      <path
        data-wire="lit"
        d={d}
        fill="none"
        stroke="rgba(245,196,0,0.22)"
        strokeWidth={w * 0.28}
        strokeLinecap="round"
        pathLength={1}
        strokeDasharray="1 2"
        strokeDashoffset={intro ? 1 : 0}
      />

      {TRAILS.map((trail) => (
        <path
          key={trail.color + trail.len}
          data-wire="trail"
          data-len={trail.len}
          d={d}
          fill="none"
          stroke={trail.color}
          strokeOpacity={trail.opacity}
          strokeWidth={w * trail.widthScale}
          strokeLinecap="round"
          pathLength={1}
          strokeDasharray={`${trail.len} 3`}
          strokeDashoffset={trail.len}
          className={ambient ? "current-ambient" : undefined}
          visibility={intro || ambient ? "visible" : "hidden"}
        />
      ))}

      <g transform={`translate(${tip.x} ${tip.y}) rotate(${tip.angle})`}>
        <rect x={-3} y={-(w + 2) / 2} width={4} height={w + 2} rx={1.2} fill="#07080A" />
        <rect x={0.6} y={-w * 0.28} width={w * 1.55} height={w * 0.56} rx={w * 0.26} fill="url(#copper-body)" />
        <line x1={2} y1={-w * 0.08} x2={w * 1.5} y2={-w * 0.08} stroke="rgba(80,40,18,0.4)" strokeWidth={0.6} />
        <line x1={2} y1={w * 0.1} x2={w * 1.5} y2={w * 0.1} stroke="rgba(80,40,18,0.28)" strokeWidth={0.55} />
        {!intro && (
          <circle
            cx={w * 1.6}
            cy={0}
            r={w * 2.1}
            fill="url(#wire-halo)"
            className={ambient ? "tip-spark tip-spark--loop" : "tip-spark"}
          />
        )}
      </g>

      {intro && (
        <g data-wire="head" opacity={0}>
          <circle r={w * 2.2} fill="url(#wire-halo)" />
          <circle r={w * 0.42} fill="#FFE27A" opacity={0.88} />
          <circle r={w * 0.18} fill="#FFFFFF" />
        </g>
      )}
    </svg>
  );
}

export const CinematicWire = memo(CinematicWireImpl);
