import FeaturesClient from "@/components/pages/features-client";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Features | Finance Club BIT Mesra",
  description: "Explore the features of the Finance Club platform.",
};

export default function FeaturesPage() {
  return <FeaturesClient />;
}
