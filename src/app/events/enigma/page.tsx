import type { Metadata } from 'next';
import EnigmaClient from "@/components/pages/enigma-client";

export const metadata: Metadata = {
  title: "Enigma | Finance Club",
  description: "The Art of Strategic Thinking. Our flagship case study event.",
};

export default function EnigmaPage() {
  return <EnigmaClient />;
}
