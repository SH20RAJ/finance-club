"use client";

import { ArrowLeft, ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

export interface Gallery4Item {
  id: string;
  title: string;
  description: string;
  href: string;
  image: string;
}

export interface Gallery4Props {
  title?: string;
  description?: string;
  items: Gallery4Item[];
}

const data = [
  {
    id: "item-1",
    title: "Annual Trading Competition",
    description:
      "Students battling it out in the high-stakes world of algorithmic trading simulation.",
    href: "/events",
    image: "/image.png",
  },
  {
    id: "item-2",
    title: "Guest Lecture Series",
    description:
      "Learning from the best in the industry. Insights that go beyond textbooks.",
    href: "/events",
    image: "/image copy.png",
  },
  {
    id: "item-3",
    title: "Budget Analysis Session",
    description:
      "Breaking down the Union Budget and its impact on the economy.",
    href: "/events",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80&w=1080",
  },
  {
    id: "item-4",
    title: "Campus Wall Street",
    description:
      "Transforming the campus into a bustling trading floor.",
    href: "/events",
    image: "https://images.unsplash.com/photo-1611974765270-ca12586343bb?auto=format&fit=crop&q=80&w=1080",
  },
];

const Gallery4 = ({
  title = "Our Memories",
  description = "A glimpse into the life at Finance Club. From intense competitions to fun networking sessions.",
  items = data,
}: Gallery4Props) => {
  const [carouselApi, setCarouselApi] = useState<CarouselApi>();
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    if (!carouselApi) {
      return;
    }
    const updateSelection = () => {
      setCanScrollPrev(carouselApi.canScrollPrev());
      setCanScrollNext(carouselApi.canScrollNext());
      setCurrentSlide(carouselApi.selectedScrollSnap());
    };
    updateSelection();
    carouselApi.on("select", updateSelection);
    return () => {
      carouselApi.off("select", updateSelection);
    };
  }, [carouselApi]);

  return (
    <section className="py-20 bg-zinc-50 dark:bg-zinc-900 border-y-2 border-zinc-900 dark:border-white">
      <div className="container mx-auto px-6">
        <div className="mb-8 flex items-end justify-between md:mb-14 lg:mb-16">
          <div className="flex flex-col gap-4">
            <h2 className="text-4xl md:text-5xl font-handwritten font-bold rotate-[-1deg] text-zinc-900 dark:text-white">
              {title}
            </h2>
            <p className="max-w-lg text-zinc-600 dark:text-zinc-400 font-handwritten text-xl rotate-[1deg]">{description}</p>
          </div>
          <div className="hidden shrink-0 gap-2 md:flex">
            <Button
              size="icon"
              variant="ghost"
              onClick={() => {
                carouselApi?.scrollPrev();
              }}
              disabled={!canScrollPrev}
              className="disabled:pointer-events-auto border-2 border-zinc-900 dark:border-white rounded-none hover:bg-fin-blue hover:text-white transition-colors"
            >
              <ArrowLeft className="size-5" />
            </Button>
            <Button
              size="icon"
              variant="ghost"
              onClick={() => {
                carouselApi?.scrollNext();
              }}
              disabled={!canScrollNext}
              className="disabled:pointer-events-auto border-2 border-zinc-900 dark:border-white rounded-none hover:bg-fin-blue hover:text-white transition-colors"
            >
              <ArrowRight className="size-5" />
            </Button>
          </div>
        </div>
      </div>
      <div className="w-full">
        <Carousel
          setApi={setCarouselApi}
          opts={{
            breakpoints: {
              "(max-width: 768px)": {
                dragFree: true,
              },
            },
          }}
        >
          <CarouselContent className="ml-0 2xl:ml-[max(8rem,calc(50vw-700px))] 2xl:mr-[max(0rem,calc(50vw-700px))]">
            {items.map((item) => (
              <CarouselItem
                key={item.id}
                className="max-w-[320px] pl-[20px] lg:max-w-[360px]"
              >
                <a href={item.href} className="group block h-full">
                  <div className="relative h-full min-h-[27rem] max-w-full overflow-hidden bg-white dark:bg-zinc-800 border-2 border-zinc-900 dark:border-white shadow-[6px_6px_0px_0px] shadow-zinc-900 dark:shadow-white group-hover:translate-x-[-2px] group-hover:translate-y-[-2px] group-hover:shadow-[8px_8px_0px_0px] transition-all duration-300">
                    <div className="h-60 overflow-hidden border-b-2 border-zinc-900 dark:border-white">
                        <img
                        src={item.image}
                        alt={item.title}
                        className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-110"
                        />
                    </div>
                    
                    <div className="flex flex-col items-start p-6 text-zinc-900 dark:text-white h-full relative">
                      <div className="mb-2 text-2xl font-handwritten font-bold text-fin-blue">
                        {item.title}
                      </div>
                      <div className="mb-8 line-clamp-3 text-zinc-600 dark:text-zinc-300 font-sans text-sm">
                        {item.description}
                      </div>
                      
                      <div className="mt-auto flex items-center text-sm font-bold uppercase tracking-widest group-hover:text-fin-red transition-colors">
                        View Details <ArrowRight className="ml-2 w-4 h-4" />
                      </div>
                    </div>
                  </div>
                </a>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
        <div className="mt-8 flex justify-center gap-2">
          {items.map((_, index) => (
            <button
              key={index}
              className={`h-3 w-3 border border-zinc-900 dark:border-white transition-all ${
                currentSlide === index ? "bg-fin-blue rotate-45" : "bg-transparent rotate-0"
              }`}
              onClick={() => carouselApi?.scrollTo(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export { Gallery4 };
