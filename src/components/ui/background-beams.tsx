"use client";
import React from "react";
import { cn } from "@/lib/utils";

export const BackgroundBeams = ({ className }: { className?: string }) => {
  return (
    <div
      className={cn(
        "absolute h-full w-full inset-0 overflow-hidden pointer-events-none",
        className
      )}
    >
      <svg
        className="absolute w-full h-full left-0 top-0 opacity-40 animate-pulse pointer-events-none"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 900"
        fill="none"
      >
        <path
          opacity="0.5"
          d="M0 0.5H1440"
          stroke="url(#paint0_linear_beams)"
          strokeWidth="0.5"
        />
        <path
          opacity="0.5"
          d="M0 100.5H1440"
          stroke="url(#paint1_linear_beams)"
          strokeWidth="0.5"
        />
        <path
          opacity="0.3"
          d="M0 200.5H1440"
          stroke="url(#paint2_linear_beams)"
          strokeWidth="0.5"
        />
        <path
            d="M-100 0L700 900"
            stroke="url(#paint_diagonal)"
            strokeWidth="1"
            className="animate-[pulse_4s_ease-in-out_infinite]"
        />
        <defs>
          <linearGradient
            id="paint0_linear_beams"
            x1="0"
            y1="0.5"
            x2="1440"
            y2="0.5"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#564bf0" stopOpacity="0" />
            <stop offset="0.5" stopColor="#564bf0" stopOpacity="0.8" />
            <stop offset="1" stopColor="#564bf0" stopOpacity="0" />
          </linearGradient>
          <linearGradient
            id="paint1_linear_beams"
            x1="0"
            y1="100.5"
            x2="1440"
            y2="100.5"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#7b61ff" stopOpacity="0" />
            <stop offset="0.5" stopColor="#7b61ff" stopOpacity="0.5" />
            <stop offset="1" stopColor="#7b61ff" stopOpacity="0" />
          </linearGradient>
            <linearGradient
            id="paint_diagonal"
            x1="-100"
            y1="0"
            x2="700"
            y2="900"
            gradientUnits="userSpaceOnUse"
          >
             <stop stopColor="#564bf0" stopOpacity="0" />
            <stop offset="0.5" stopColor="#ffffff" stopOpacity="0.4" />
             <stop offset="1" stopColor="#564bf0" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>
      
      <div className="absolute inset-0 bg-background/80 mask-image-linear-gradient" />
    </div>
  );
};
