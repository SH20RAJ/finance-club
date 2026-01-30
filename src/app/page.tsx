import { GlowingEffect } from "@/components/ui/glowing-effect";
import GallerySection from "@/components/home/GallerySection";
import { Testimonial } from "@/components/ui/design-testimonial";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import Link from "next/link"; 
import { Reveal } from "@/components/ui/reveal";
import { MagneticButton } from "@/components/ui/magnetic-button";
import { ParallaxOffset } from "@/components/ui/parallax-offset";

export const metadata = {
  title: "Finance Club | BIT Mesra",
  description: "Finance Club of BIT Mesra. Fostering financial literacy and market awareness.",
};

export default function Home() {
  return (
    <main className="min-h-screen bg-zinc-50 dark:bg-black text-zinc-900 dark:text-zinc-50 selection:bg-fin-blue selection:text-white overflow-hidden">
      
      {/* HERO SECTION WITH GLOWING EFFECT */}
      <section className="relative min-h-screen w-full flex flex-col items-center justify-center overflow-hidden pt-20">
         
         {/* Background Glow - Parallax */}
         <ParallaxOffset offset={50} className="absolute inset-0 z-0 opacity-30 dark:opacity-20 pointer-events-none">
            <GlowingEffect spread={120} blur={200} />
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-fin-blue/20 rounded-full blur-[100px] animate-pulse" />
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-fin-red/10 rounded-full blur-[100px] animate-pulse delay-1000" />
         </ParallaxOffset>

         <div className="container relative z-10 flex flex-col items-center text-center px-6">
            <Reveal variant="fade-up" delay={0.1}>
                <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-md shadow-lg shadow-fin-blue/10 mb-8 hover:bg-white/10 transition-colors cursor-default">
                    <Sparkles className="w-4 h-4 text-fin-blue" />
                    <span className="font-heading font-medium text-sm text-zinc-600 dark:text-zinc-300 tracking-wide uppercase">Accepting New Members 2026</span>
                </div>
            </Reveal>

            <Reveal variant="scale-up" delay={0.2} duration={0.8}>
                <h1 className="font-heading font-black text-[12vw] leading-[0.85] tracking-tighter relative bg-gradient-to-b from-zinc-900 to-zinc-500 dark:from-white dark:to-white/40 bg-clip-text text-transparent">
                    FINSTREET
                <span className="absolute -top-4 -right-12 text-[4vw] text-fin-blue tracking-tighter">
                    &apos;26
                </span>
                </h1>
            </Reveal>

            <Reveal variant="fade-up" delay={0.4}>
                <p className="max-w-2xl text-xl md:text-2xl mt-8 font-sans font-light text-zinc-600 dark:text-zinc-400">
                    Where the graph goes up, and the <span className="text-fin-blue font-semibold">logic runs deep</span>.
                </p>
            </Reveal>

            <div className="flex flex-col md:flex-row gap-6 mt-12">
               <Reveal variant="slide-in" delay={0.6}>
                   <Link href="/join">
                     <MagneticButton>
                        <Button className="h-14 px-10 text-lg font-bold rounded-full bg-fin-blue text-white shadow-lg shadow-fin-blue/25 hover:shadow-fin-blue/50 transition-all hover:scale-105">
                            Start Trading
                            <ArrowRight className="ml-2 w-5 h-5" />
                        </Button>
                     </MagneticButton>
                   </Link>
               </Reveal>
               <Reveal variant="slide-in" delay={0.7}>
                   <Link href="/events">
                     <MagneticButton>
                        <Button variant="outline" className="h-14 px-10 text-lg font-bold rounded-full border border-zinc-200 dark:border-white/10 bg-white/5 backdrop-blur-sm text-zinc-900 dark:text-white hover:bg-white/10 transition-all hover:scale-105">
                            View Events
                        </Button>
                     </MagneticButton>
                   </Link>
               </Reveal>
            </div>
         </div>
      </section>

      {/* ABOUT / MISSION SECTION */}
      <section className="py-24 bg-zinc-50/50 dark:bg-fin-dark/50 border-y border-zinc-200 dark:border-white/5 relative overflow-hidden">
         <div className="container mx-auto px-6 relative z-10">
            <div className="flex flex-col md:flex-row gap-16 items-center">
               <div className="flex-1">
                  <Reveal variant="fade-up">
                      <h2 className="font-heading text-4xl md:text-5xl font-bold text-zinc-900 dark:text-white mb-8 leading-tight">
                         A Tool that can cut both ways — <br/>
                         <span className="text-fin-blue">Creating Wealth</span> or <span className="text-fin-red">Causing Harm</span>.
                      </h2>
                  </Reveal>
                  <div className="space-y-6 text-xl text-zinc-600 dark:text-zinc-400 font-sans font-light leading-relaxed">
                     <Reveal variant="fade-up" delay={0.2}>
                         <p>
                            The Finance Club of Birla Institute of Technology, Mesra is a student-driven initiative dedicated to fostering financial literacy, market awareness, and a deeper understanding of the global economic landscape.
                         </p>
                     </Reveal>
                     <Reveal variant="fade-up" delay={0.3}>
                         <p>
                            Established with the vision of bridging the gap between classroom learning and real-world financial applications, the club provides a platform for students to explore the dynamic world of finance through hands-on learning and collaborative growth.
                         </p>
                     </Reveal>
                     <Reveal variant="fade-up" delay={0.4}>
                         <p>
                            At the Finance Club, we believe that financial education empowers individuals to make informed decisions—whether in personal finance, investments, corporate strategy, or entrepreneurship.
                         </p>
                     </Reveal>
                  </div>
                  <div className="mt-10">
                     <Reveal variant="scale-up" delay={0.5}>
                         <Button asChild className="font-bold text-lg bg-white/10 text-fin-blue border border-fin-blue/20 hover:bg-fin-blue/10 transition-colors rounded-full px-8 py-6">
                            <Link href="/about">
                               Read Our Full Story <ArrowRight className="ml-2 w-5 h-5" />
                            </Link>
                         </Button>
                     </Reveal>
                  </div>
               </div>
               
               <div className="flex-1 relative">
                  <div className="absolute -inset-4 bg-fin-blue/20 blur-3xl rounded-full animate-pulse"></div>
                  <Reveal variant="scale-up" duration={0.8}>
                      <div className="relative bg-white dark:bg-zinc-800/50 border border-zinc-200 dark:border-white/10 p-3 rounded-2xl shadow-2xl backdrop-blur-xl rotate-2 hover:rotate-0 transition-transform duration-500">
                          <div className="aspect-video bg-zinc-100 dark:bg-zinc-900/50 flex items-center justify-center rounded-xl overflow-hidden">
                             <span className="font-sans text-zinc-400 text-lg">Club Session / Team Photo</span>
                          </div>
                      </div>
                  </Reveal>
               </div>
            </div>
         </div>
      </section>

      {/* GALLERY SECTION */}
      <Reveal variant="fade-in">
        <GallerySection />
      </Reveal>

      {/* TESTIMONIALS */}
      <section className="py-20 bg-zinc-50 dark:bg-black relative overflow-hidden">
         <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-fin-blue/10 via-transparent to-transparent pointer-events-none" />
         <div className="container mx-auto px-6 mb-12 text-center relative z-10">
            <Reveal variant="fade-up">
                <h2 className="font-heading text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-zinc-900 to-zinc-600 dark:from-white dark:to-zinc-500 mb-4">
                Real Talk from <span className="text-fin-blue">Alumni</span>
                </h2>
            </Reveal>
         </div>
         <Testimonial />
      </section>

    </main>
  );
}
