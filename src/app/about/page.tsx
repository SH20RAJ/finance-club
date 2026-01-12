import type { Metadata } from 'next';
import AboutClient from "@/components/pages/about-client";

export const metadata: Metadata = {
  title: "About Us | Finance Club BIT Mesra",
  description: "Learn about the mission, vision, and history of the Finance Club at BIT Mesra.",
};

export default function AboutPage() {
  return <AboutClient />;
}
