import type { Metadata } from 'next';
import GalleryClient from "@/components/pages/gallery-client";

export const metadata: Metadata = {
  title: "Gallery | Finance Club",
  description: "A growing collection of memories from our events and sessions.",
};

export default function GalleryPage() {
  return <GalleryClient />;
}
