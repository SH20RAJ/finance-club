import EventsClient from "@/components/pages/events-client";
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Events | Finance Club BIT Mesra",
  description: "Join us for Enigma, Estimania, and other flagship finance events.",
};

export default function EventsPage() {
  return <EventsClient />;
}
