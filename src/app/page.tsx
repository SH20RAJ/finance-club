import type { Metadata } from "next";
import { Navbar } from "@/components/ui/Navbar";
import { Hero } from "@/components/home/Hero";
import { EventsSection } from "@/components/home/EventsSection";
import { SpeakersSection } from "@/components/home/SpeakersSection";
import { GallerySection } from "@/components/home/GallerySection";
import { Footer } from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Finance Club - Finstreet '26",
  description: "The official website of Finance Club BIT Mesra. Presenting Finstreet - Behind the Stumps.",
  openGraph: {
    title: "Finance Club - Finstreet '26",
    description: "Where strategy meets the spirit of cricket. Join the revolution.",
    type: "website",
  },
};

export default function Home() {
  return (
    <main className="min-h-screen bg-fin-dark text-white selection:bg-fin-blue selection:text-white">
      <Navbar />
      <Hero />
      <EventsSection />
      <SpeakersSection />
      <GallerySection />
      <Footer />
    </main>
  );
}
