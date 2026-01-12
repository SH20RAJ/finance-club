'use client';

import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/layout/Footer";
import { CreativePricing, PricingTier } from "@/components/ui/creative-pricing";
import { Zap, Trophy, Target, Calendar } from "lucide-react";

export default function EventsPage() {
  const events: PricingTier[] = [
    {
      name: "Enigma",
      price: "19 Jan",
      description: "Room 233A • 2:00 PM",
      icon: <Target className="w-6 h-6" />,
      features: ["Strategic Case Study", "Live Problem Solving", "Cash Prizes"],
      color: "blue",
      popular: false,
    },
    {
      name: "Estimania",
      price: "19 Jan",
      description: "Room 234 • 10:00 AM",
      icon: <Zap className="w-6 h-6" />,
      features: ["Estimation Challenge", "Quick Thinking", "Team Event"],
      color: "amber",
      popular: false,
    },
    {
      name: "Behind The Stumps",
      price: "18 Jan",
      description: "Seminar Hall 1 • 11:00 AM",
      icon: <Trophy className="w-6 h-6" />,
      features: ["IPL Auction Sim", "Bidding Strategy", "Flagship Event"],
      color: "emerald",
      popular: true,
    }
  ];

  return (
    <main className="min-h-screen bg-zinc-50 dark:bg-black font-sans">
      <Navbar />
      
      <section className="pt-32 pb-20">
         <CreativePricing 
           tag="Upcoming Events"
           title="Mark Your Calendars"
           description="Join us for the most exciting financial challenges of the year."
           tiers={events}
         />
      </section>

      <Footer />
    </main>
  );
}
