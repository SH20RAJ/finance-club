import { getEventBySlug } from '@/data/events';
import EventDetailsClient from '@/components/pages/event-details-client';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';

type Props = {
  params: Promise<{ slug: string }>
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const event = getEventBySlug(slug);
  if (!event) return { title: 'Event Not Found' };
  
  return {
    title: `${event.title} | Finance Club Events`,
    description: event.description,
  };
}

export default async function EventPage({ params }: Props) {
  const { slug } = await params;
  const event = getEventBySlug(slug);

  if (!event) {
    notFound();
  }

  return <EventDetailsClient event={event} />;
}
