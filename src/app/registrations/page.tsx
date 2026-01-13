import RegistrationsClient from "@/components/pages/registrations-client";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Registrations | Finance Club BIT Mesra",
  description: "Register for upcoming events and competitions.",
};

export default function RegistrationsPage() {
  return <RegistrationsClient />;
}
