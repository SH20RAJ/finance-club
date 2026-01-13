import type { Metadata } from 'next';
import EstimaniaClient from "@/components/pages/estimania-client";

export const metadata: Metadata = {
  title: "Estimania | Finance Club",
  description: "Test your valuation skills in our premier estimation competition.",
};

export default function EstimaniaPage() {
  return <EstimaniaClient />;
}
