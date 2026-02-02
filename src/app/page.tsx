import { HeroSection } from "@/components/home/Hero";
import { TracingBeam } from "@/components/ui/tracing-beam";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import { BackgroundBeams } from "@/components/ui/background-beams";
import GallerySection from "@/components/home/GallerySection";
import { Testimonial } from "@/components/ui/design-testimonial";
import { Reveal } from "@/components/ui/reveal";
import { Sparkles, TrendingUp, Users } from "lucide-react";

export const metadata = {
  title: "Finance Club | BIT Mesra",
  description: "Finance Club of BIT Mesra. Fostering financial literacy and market awareness.",
};

const aboutItems = [
    {
        title: "Financial Literacy",
        description: "Breaking down complex economic concepts into actionable insights.",
        header: <div className="flex flex-col w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-fin-blue/20 to-fin-purple/20" />,
        icon: <Sparkles className="h-4 w-4 text-neutral-500" />,
    },
    {
        title: "Market Analysis",
        description: "Real-time tracking and simulation of global market trends.",
        header: <div className="flex flex-col w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-fin-green/20 to-fin-blue/20" />,
        icon: <TrendingUp className="h-4 w-4 text-neutral-500" />,
    },
    {
        title: "Community Growth",
        description: "A network of future leaders, alumni, and industry experts.",
        header: <div className="flex flex-col w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-fin-red/20 to-fin-orange/20" />,
        icon: <Users className="h-4 w-4 text-neutral-500" />,
    },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white selection:bg-fin-blue selection:text-white overflow-hidden">
      
      {/* 1. QUANTUM HERO SECTION */}
      <section className="relative w-full">
         <HeroSection />
      </section>

      {/* 2. TRACING BEAM CONTENT */}
      <TracingBeam className="px-6"> 
        <div className="max-w-2xl mx-auto antialiased pt-40 relative">
            
             {/* Mission Statement */}
            <div className="mb-20">
                <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6 text-white">
                    Decoding the <span className="text-fin-blue">Algorithm</span> of Wealth.
                </h2>
                <p className="text-zinc-400 font-sans text-lg leading-relaxed mb-4">
                    The Finance Club of BIT Mesra is a student-driven initiative dedicated to fostering financial literacy, market awareness, and a deeper understanding of the global economic landscape.
                </p>
                <p className="text-zinc-400 font-sans text-lg leading-relaxed">
                     We bridge the gap between classroom theory and the chaotic reality of the markets.
                </p>
            </div>

            {/* Bento Grid - Core Pillars */}
             <div className="mb-20">
                <Reveal variant="fade-up">
                    <h3 className="text-2xl font-bold mb-8 text-white flex items-center gap-2">
                        <Sparkles className="text-fin-blue" />
                        Our Core Pillars
                    </h3>
                </Reveal>
                <BentoGrid className="max-w-4xl mx-auto">
                    {aboutItems.map((item, i) => (
                        <BentoGridItem
                            key={i}
                            title={item.title}
                            description={item.description}
                            header={item.header}
                            icon={item.icon}
                            className={i === 3 || i === 6 ? "md:col-span-2" : ""}
                        />
                    ))}
                </BentoGrid>
             </div>

             {/* Events Teaser */}
             <div className="mb-40">
                 <h2 className="text-3xl md:text-5xl font-heading font-bold mb-10 text-white">
                    Upcoming <span className="text-fin-green">Events</span>
                </h2>
                <div className="relative group cursor-pointer border border-white/10 p-8 rounded-3xl bg-white/5 hover:bg-white/10 transition-colors overflow-hidden">
                    <BackgroundBeams className="opacity-10" />
                    <div className="relative z-10 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                        <div>
                            <div className="text-fin-blue font-mono text-sm mb-2">FLAGSHIP EVENT</div>
                            <h3 className="text-4xl font-bold text-white mb-2">ENIGMA &apos;26</h3>
                            <p className="text-zinc-400">The Ultimate Case Study Challenge.</p>
                        </div>
                        <div className="flex flex-col items-center bg-black/50 p-4 rounded-xl border border-white/10">
                            <span className="text-3xl font-bold text-white">18</span>
                            <span className="text-xs text-zinc-500 uppercase tracking-widest">Jan</span>
                        </div>
                    </div>
                </div>
             </div>

        </div>
      </TracingBeam>

      {/* 3. GALLERY SECTION (Reused but Clean) */}
      <section className="relative z-10 bg-black py-20 border-t border-white/10">
         <Reveal variant="fade-in">
             <GallerySection />
         </Reveal>
      </section>

      {/* 4. TESTIMONIALS */}
      <section className="py-20 bg-black relative overflow-hidden">
         <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-fin-blue/10 via-transparent to-transparent pointer-events-none" />
          <div className="container mx-auto px-6 mb-12 text-center relative z-10">
            <h2 className="font-heading text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-zinc-500 mb-4">
               Voices of the <span className="text-fin-blue">Alumni</span>
            </h2>
         </div>
         <Testimonial />
      </section>

    </main>
  );
}
