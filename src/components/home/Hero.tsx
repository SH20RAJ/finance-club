"use client";
import React from "react";

import { Spotlight } from "@/components/ui/spotlight";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { ArrowRight } from "lucide-react";
import Link from 'next/link';

export function HeroSection() {
  return (
    <div className="h-screen w-full rounded-md flex md:items-center md:justify-center bg-transparent antialiased bg-grid-white/[0.02] relative overflow-hidden">
        
      {/* Background Ambience */}
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />
      <BackgroundBeams className="opacity-20" />
      
      <div className="p-4 max-w-7xl  mx-auto relative z-10  w-full pt-20 md:pt-0">
        <h1 className="text-5xl md:text-8xl font-heading font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
          FINSTREET
        </h1>
        <p className="mt-4 font-normal text-base text-neutral-300 max-w-lg text-center mx-auto font-sans">
          Where strategy meets uncertainty. Join the premier finance community of BIT Mesra to decode markets, master wealth, and lead the future of finance.
        </p>

        <div className="flex flex-col md:flex-row items-center justify-center gap-4 mt-10">
            <Link href="/join">
                <button className="bg-slate-800 no-underline group cursor-pointer relative shadow-2xl shadow-zinc-900 rounded-full p-px text-xs font-semibold leading-6  text-white inline-block">
                    <span className="absolute inset-0 overflow-hidden rounded-full">
                        <span className="absolute inset-0 rounded-full bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(56,189,248,0.6)_0%,rgba(56,189,248,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                    </span>
                    <div className="relative flex space-x-2 items-center z-10 rounded-full bg-zinc-950 py-3 px-8 ring-1 ring-white/10 ">
                        <span className="text-lg">Join the Club</span>
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </div>
                </button>
            </Link>
        </div>
      </div>
      
    </div>
  );
}
