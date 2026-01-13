import type { Metadata } from 'next';
import CommunityClient from "@/components/pages/community-client";

export const metadata: Metadata = {
  title: "Community | Finance Club",
  description: "Join our vibrant community of finance enthusiasts.",
};

export default function CommunityPage() {
  return <CommunityClient />;
}
