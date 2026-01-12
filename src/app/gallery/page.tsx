import type { Metadata } from 'next';
import { Gallery4 } from "@/components/blocks/gallery4";

export const metadata: Metadata = {
  title: "Gallery | Finance Club",
  description: "A growing collection of memories from our events and sessions.",
};

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
      title: "2024 Archive",
      items: [
         { id: "4", title: "Guest Lectures", description: "Industry experts sharing their wisdom.", image: "https://images.unsplash.com/photo-1544531586-fde5298cdd40?auto=format&fit=crop&q=80&w=2000", href: "#" },
         { id: "5", title: "Networking", description: "Connecting future leaders of finance.", image: "https://images.unsplash.com/photo-1528605248644-14dd04022da1?auto=format&fit=crop&q=80&w=2000", href: "#" },
      ]
    }
  ];

  return (
    <main className="min-h-screen bg-white dark:bg-black text-zinc-900 dark:text-zinc-50 selection:bg-fin-blue selection:text-white pt-24">
      
      <div className="container mx-auto px-6 py-10 mb-16 text-center">
         <h1 className="font-handwritten text-[10vw] leading-none font-bold text-center rotate-[-2deg]">
           OUR <span className="text-fin-blue underline decoration-wavy decoration-2">GALLERY</span>
         </h1>
         <p className="max-w-xl mx-auto text-xl md:text-2xl mt-8 font-handwritten text-zinc-600 dark:text-zinc-400 rotate-[1deg]">
            A visual journey through our events, workshops, and community gatherings.
         </p>
      </div>

      {years.map((year, idx) => (
        <section key={year.title} className={`py-10 ${idx % 2 !== 0 ? 'bg-fin-blue/5 border-y-2 border-zinc-900 dark:border-white' : ''}`}>
           <Gallery4 
             title={year.title}
             description={`Capturing the best moments from ${year.title.split(' ')[0]}.`}
             items={year.items}
           />
        </section>
      ))}
    </main>
  );
}
