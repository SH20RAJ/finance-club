'use client';

import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/layout/Footer";
import { Gallery4 } from "@/components/blocks/gallery4";

export default function GalleryPage() {
  const years = [
    {
      title: "2025 Highlights",
      items: [
         { id: "1", title: "FinStreet '25", description: "The biggest financial festival of the year.", image: "/image.png", href: "#" },
         { id: "2", title: "Crypto Summit", description: "Exploring the future of decentralized finance.", image: "/image copy.png", href: "#" },
         { id: "3", title: "Stock Wars", description: "Live trading simulation with real-time market data.", image: "https://images.unsplash.com/photo-1611974765270-ca12586343bb?auto=format&fit=crop&q=80&w=2000", href: "#" },
      ]
    },
    {
      title: "2024 Memories",
      items: [
         { id: "4", title: "Guest Lectures", description: "Industry experts sharing their wisdom.", image: "https://images.unsplash.com/photo-1544531586-fde5298cdd40?auto=format&fit=crop&q=80&w=2000", href: "#" },
         { id: "5", title: "Networking", description: "Connecting future leaders of finance.", image: "https://images.unsplash.com/photo-1528605248644-14dd04022da1?auto=format&fit=crop&q=80&w=2000", href: "#" },
         { id: "6", title: "Workshops", description: "Hands-on learning sessions.", image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80&w=2000", href: "#" },
      ]
    }
  ];

  return (
    <main className="min-h-screen bg-zinc-50 dark:bg-black text-zinc-900 dark:text-zinc-50">
      <Navbar />
      
      <section className="pt-32 pb-10 text-center">
         <h1 className="font-handwritten text-[10vw] leading-none font-bold text-center rotate-[-2deg]">
           OUR <span className="text-fin-blue underline decoration-wavy decoration-2">GALLERY</span>
         </h1>
         <p className="font-handwritten text-xl max-w-2xl mx-auto mt-6 text-zinc-600 dark:text-zinc-400 rotate-[1deg]">
            A visual journey through our events, workshops, and community gatherings.
         </p>
      </section>

      {years.map((year, idx) => (
        <section key={year.title} className={`py-10 ${idx % 2 !== 0 ? 'bg-fin-blue/5 border-y-2 border-zinc-900 dark:border-white' : ''}`}>
           <Gallery4 
             title={year.title}
             description={`Capturing the best moments from ${year.title.split(' ')[0]}.`}
             items={year.items}
           />
        </section>
      ))}

      <Footer />
    </main>
  );
}
