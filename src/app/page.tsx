import { Navbar } from "@/components/navbar";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import { Testimonial } from "@/components/ui/design-testimonial"; // Check named export compatibility
import { Gallery4 } from "@/components/blocks/gallery4";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import Link from "next/link"; // Required for Link usage

export const metadata = {
  title: "Finance Club | Creative",
  description: "The most creative finance club on campus.",
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
                 '26
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

      {/* GALLERY SECTION */}
      <section className="relative z-10 py-20 bg-white dark:bg-zinc-950 border-y-2 border-zinc-900 dark:border-zinc-800">
         <Gallery4 
           title="Our Memories" 
           description="Snapshots from the trading floor, hackathons, and late-night analysis sessions."
           items={[
             { id: "1", title: "FinStreet '25", description: "The biggest financial festival of the year.", image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&q=80&w=2000", href: "/events" },
             { id: "2", title: "Crypto Summit", description: "Exploring the future of decentralized finance.", image: "https://images.unsplash.com/photo-1621504450168-b8c437536123?auto=format&fit=crop&q=80&w=2000", href: "/events" },
             { id: "3", title: "Stock Wars", description: "Live trading simulation with real-time market data.", image: "https://images.unsplash.com/photo-1611974765270-ca12586343bb?auto=format&fit=crop&q=80&w=2000", href: "/events" },
             { id: "4", title: "Guest Lectures", description: "Industry experts sharing their wisdom.", image: "https://images.unsplash.com/photo-1544531586-fde5298cdd40?auto=format&fit=crop&q=80&w=2000", href: "/events" },
             { id: "5", title: "Networking", description: "Connecting future leaders of finance.", image: "https://images.unsplash.com/photo-1528605248644-14dd04022da1?auto=format&fit=crop&q=80&w=2000", href: "/events" }
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

      <Footer />
    </main>
  );
}
