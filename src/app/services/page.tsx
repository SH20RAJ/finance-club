import type { Metadata } from 'next';
import ServicesClient from "@/components/pages/services-client";

export const metadata: Metadata = {
  title: "Services | Finance Club",
  description: "Explore the different domains and learning tracks we offer.",
};

export default function ServicesPage() {
  return <ServicesClient />;
}
