import { GlowingEffect } from "@/components/ui/glowing-effect";
import { Gallery4 } from "@/components/blocks/gallery4";
import { Testimonial } from "@/components/ui/design-testimonial";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import Link from "next/link"; // Required for Link usage

export const metadata = {
  title: "Finance Club | BIT Mesra",
  description: "Finance Club of BIT Mesra. Fostering financial literacy and market awareness.",
};

export default function Home() {
  return (
    <main className="min-h-screen bg-zinc-50 dark:bg-black text-zinc-900 dark:text-zinc-50 selection:bg-fin-blue selection:text-white overflow-hidden">
      
      {/* HERO SECTION WITH GLOWING EFFECT */}
      <section className="relative min-h-screen w-full flex flex-col items-center justify-center overflow-hidden pt-20">
         
         {/* Background Glow */}
         <div className="absolute inset-0 z-0 opacity-40 dark:opacity-20 pointer-events-none">
            <GlowingEffect spread={100} blur={160} />
         </div>

         <div className="container relative z-10 flex flex-col items-center text-center px-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border-2 border-zinc-900 dark:border-white bg-white dark:bg-zinc-900 shadow-[4px_4px_0px_0px] shadow-zinc-900 dark:shadow-white mb-8 rotate-[-2deg] hover:rotate-0 transition-transform cursor-default">
               <Sparkles className="w-4 h-4 text-amber-500" />
               <span className="font-handwritten font-bold text-lg">Accepting New Members 2026</span>
            </div>

            <h1 className="font-handwritten font-black text-[12vw] leading-[0.85] tracking-tight relative">
               FINSTREET
               <span className="absolute -top-4 -right-8 text-[4vw] text-fin-blue rotate-12">
                 &apos;26
               </span>
            </h1>

            <p className="max-w-xl text-xl md:text-2xl mt-8 font-handwritten text-zinc-600 dark:text-zinc-400 rotate-1">
               Where the graph goes up, and the <span className="underline decoration-wavy decoration-fin-red">logic runs deep.</span>
            </p>

            <div className="flex flex-col md:flex-row gap-6 mt-12">
               <Link href="/join">
                 <Button className="h-14 px-8 text-xl font-handwritten border-2 border-zinc-900 dark:border-white bg-fin-blue text-white shadow-[6px_6px_0px_0px] shadow-zinc-900 dark:shadow-white hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[8px_8px_0px_0px] transition-all">
                    Start Trading
                    <ArrowRight className="ml-2 w-5 h-5" />
                 </Button>
               </Link>
               <Link href="/events">
                 <Button variant="outline" className="h-14 px-8 text-xl font-handwritten border-2 border-zinc-900 dark:border-white bg-white dark:bg-zinc-900 text-zinc-900 dark:text-white shadow-[6px_6px_0px_0px] shadow-zinc-900 dark:shadow-white hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[8px_8px_0px_0px] transition-all">
                    View Events
                 </Button>
               </Link>
            </div>
         </div>
      </section>

      {/* ABOUT / MISSION SECTION */}
      <section className="py-24 bg-zinc-900 border-y-2 border-zinc-500 overflow-hidden relative">
         <div className="container mx-auto px-6 relative z-10">
            <div className="flex flex-col md:flex-row gap-16 items-center">
               <div className="flex-1">
                  <h2 className="font-handwritten text-4xl md:text-5xl font-bold text-white mb-8 leading-tight">
                     A Tool that can cut both ways — <br/>
                     <span className="text-fin-blue">Creating Wealth</span> or <span className="text-fin-red">Causing Harm</span>.
                  </h2>
                  <div className="space-y-6 text-xl text-zinc-300 font-handwritten leading-relaxed">
                     <p>
                        The Finance Club of Birla Institute of Technology, Mesra is a student-driven initiative dedicated to fostering financial literacy, market awareness, and a deeper understanding of the global economic landscape.
                     </p>
                     <p>
                        Established with the vision of bridging the gap between classroom learning and real-world financial applications, the club provides a platform for students to explore the dynamic world of finance through hands-on learning and collaborative growth.
                     </p>
                     <p>
                        At the Finance Club, we believe that financial education empowers individuals to make informed decisions—whether in personal finance, investments, corporate strategy, or entrepreneurship.
                     </p>
                  </div>
                  <div className="mt-10">
                     <Link href="/about">
                        <Button className="font-handwritten font-bold text-lg bg-white text-zinc-900 border-2 border-zinc-900 hover:bg-zinc-200 transition-colors">
                           Read Our Full Story <ArrowRight className="ml-2 w-5 h-5" />
                        </Button>
                     </Link>
                  </div>
               </div>
               
               <div className="flex-1 relative">
                  <div className="absolute -inset-4 bg-fin-blue/20 blur-3xl rounded-full"></div>
                  <div className="relative bg-zinc-800 border-2 border-white p-8 rotate-[2deg] shadow-[12px_12px_0px_0px] shadow-white">
                      <div className="aspect-video bg-zinc-900 flex items-center justify-center border border-zinc-700">
                         <span className="font-handwritten text-zinc-500 text-2xl">Club Session / Team Photo</span>
                      </div>
                  </div>
               </div>
            </div>
         </div>
      </section>

     {/* GALLERY SECTION */}
      <section className="relative z-10 py-20 bg-white dark:bg-zinc-950 border-y-2 border-zinc-900 dark:border-zinc-800">
         <Gallery4 
           title="Check out our Photo Gallery" 
           description="Capturing moments. Preserving stories."
           items={[
             { id: "1", title: "Stock Market Sessions", description: "Deep dives into technical analysis and market trends.", image: "/figma_attachments/stock_session.png", href: "/gallery" },
             { id: "2", title: "Case Study Competitions", description: "Solving real-world financial problems under pressure.", image: "/figma_attachments/case_study.png", href: "/gallery" },
             { id: "3", title: "Financial Workshops", description: "Hands-on learning with industry experts.", image: "/figma_attachments/workshop.png", href: "/gallery" },
             { id: "4", title: "Hackathons", description: "Innovating the future of fintech.", image: "/figma_attachments/hackathon.png", href: "/gallery" },
             { id: "5", title: "Community Events", description: "Networking with like-minded finance enthusiasts.", image: "/figma_attachments/case_study.png", href: "/gallery" }
           ]}
         />
      </section>

      {/* TESTIMONIALS */}
      <section className="py-20 bg-zinc-50 dark:bg-zinc-900">
         <div className="container mx-auto px-6 mb-12 text-center">
            <h2 className="font-handwritten text-5xl font-bold mb-4 rotate-[-1deg]">
               Real Talk form <span className="text-fin-blue">Alumni</span>
            </h2>
         </div>
         <Testimonial />
      </section>

    </main>
  );
}
