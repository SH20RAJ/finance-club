import { Reveal } from "@/components/ui/reveal";
import Link from 'next/link';
import { ArrowLeft, Calendar, Clock, MapPin, Target, Zap, Share2 } from 'lucide-react';
import { notFound } from 'next/navigation';
import { Event } from '@/data/events';

export default function EventDetailsClient({ event }: { event: Event }) {
  if (!event) return notFound();

  return (
    <main className="min-h-screen bg-zinc-50 dark:bg-black text-zinc-900 dark:text-zinc-50 pt-24 pb-20">
       
       {/* Hero / Header */}
       <div className="container mx-auto px-6 relative mb-20">
          <Link href="/events" className="inline-flex items-center gap-2 text-zinc-500 hover:text-fin-blue mb-8 font-handwritten text-xl transition-colors">
             <ArrowLeft className="w-5 h-5" /> Back to Events
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
             <Reveal variant="slide-in">
                <div className="inline-block bg-fin-blue text-white px-4 py-1 rounded-full font-handwritten font-bold mb-6 border-2 border-zinc-900 dark:border-white shadow-[4px_4px_0px_0px] shadow-zinc-900 dark:shadow-white">
                   {event.category.toUpperCase()}
                </div>
                <h1 className="font-handwritten text-6xl md:text-8xl font-bold mb-6 leading-[0.9] rotate-[-2deg]">
                   {event.title}
                </h1>
                <p className="text-2xl md:text-3xl text-zinc-600 dark:text-zinc-400 font-handwritten mb-8 border-l-4 border-fin-red pl-6 italic">
                   &quot;{event.tagline}&quot;
                </p>
                
                <div className="flex flex-col gap-4 text-lg font-handwritten text-zinc-700 dark:text-zinc-300 mb-10">
                   <div className="flex items-center gap-3">
                      <Calendar className="w-6 h-6 text-fin-blue" /> <span>{event.date}</span>
                   </div>
                   <div className="flex items-center gap-3">
                      <Clock className="w-6 h-6 text-fin-blue" /> <span>{event.time}</span>
                   </div>
                   <div className="flex items-center gap-3">
                      <MapPin className="w-6 h-6 text-fin-blue" /> <span>{event.venue}</span>
                   </div>
                </div>

                <div className="flex gap-4">
                   <Link href={event.registrationLink} className="flex-1 bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 py-4 font-bold font-handwritten text-xl text-center border-2 border-transparent hover:border-zinc-900 dark:hover:border-white hover:bg-transparent hover:text-zinc-900 dark:hover:text-white transition-all shadow-[6px_6px_0px_0px] shadow-fin-blue">
                      Register Now
                   </Link>
                   <button className="px-4 py-4 border-2 border-zinc-900 dark:border-white hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors shadow-[6px_6px_0px_0px] shadow-zinc-900 dark:shadow-white">
                      <Share2 className="w-6 h-6" />
                   </button>
                </div>
             </Reveal>

             <Reveal variant="scale-up" delay={0.2} duration={0.8} className="h-full">
                <div className="bg-white dark:bg-zinc-900 border-2 border-zinc-900 dark:border-white p-8 md:p-12 shadow-[12px_12px_0px_0px] shadow-fin-red h-full flex flex-col justify-center min-h-[400px] rotate-[2deg]">
                   <div className="text-center">
                      <Target className="w-24 h-24 mx-auto text-fin-red mb-6" />
                      <h3 className="font-handwritten text-4xl font-bold mb-6">About The Event</h3>
                      <p className="font-handwritten text-xl leading-relaxed text-zinc-600 dark:text-zinc-400 mb-8">
                         {event.longDescription}
                      </p>
                      
                      <div className="space-y-3 text-left">
                         {event.features.map((feature, i) => (
                            <div key={i} className="flex items-center gap-3 font-handwritten text-lg font-bold border-b border-zinc-200 dark:border-zinc-800 pb-2">
                                <Zap className="w-5 h-5 text-fin-yellow" /> {feature}
                            </div>
                         ))}
                      </div>
                   </div>
                </div>
             </Reveal>
          </div>
       </div>

    </main>
  );
}
