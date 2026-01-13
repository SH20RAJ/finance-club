import type { Metadata } from 'next';
import GallerySection from "@/components/home/GallerySection";

export const metadata: Metadata = {
  title: "Gallery | Finance Club",
  description: "A growing collection of memories from our events and sessions.",
};

export default function GalleryPage() {
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

      <GallerySection />
    </main>
  );
}
