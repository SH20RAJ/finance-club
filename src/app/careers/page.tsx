import type { Metadata } from 'next';
import CareersClient from "@/components/pages/careers-client";

export const metadata: Metadata = {
  title: "Careers | Finance Club",
  description: "Join the team at Finance Club BIT Mesra.",
};

export default function CareersPage() {
  return <CareersClient />;
}
