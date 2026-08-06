import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import Autoplay from "embla-carousel-autoplay";
import { X } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import letter1 from "../assets/testimonials/testimonial-1.jpg";
import letter2 from "../assets/testimonials/testimonial-2.jpg";
import letter3 from "../assets/testimonials/testimonial-3.jpg";
import letter4 from "../assets/testimonials/testimonial-4.jpg";
import letter5 from "../assets/testimonials/testimonial-5.jpg";

const testimonials = [
  {
    id: 1,
    image: letter1,
    school: "Sanjay Ghodawat International School",
    location: "Belagavi",
    event: "Annual Day Celebration 2025",
  },
  {
    id: 2,
    image: letter2,
    school: "St. Patrick's Academy",
    location: "Bengaluru",
    event: "Annual Day Programme",
  },
  {
    id: 3,
    image: letter3,
    school: "Sri Sri Ravishankar Vidya Mandir",
    location: "Bangalore East",
    event: "Annual Day 2025-26",
  },
  {
    id: 4,
    image: letter4,
    school: "Gopalan International School",
    location: "Bangalore",
    event: "Annual Day Event",
  },
  {
    id: 5,
    image: letter5,
    school: "Royal Public School",
    location: "Bangalore",
    event: "Annual Day Cultural Events",
  },
];

function Testimonials() {
  const [activeId, setActiveId] = useState<number | null>(null);
  const active = testimonials.find((item) => item.id === activeId) ?? null;

  useEffect(() => {
    if (activeId === null) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setActiveId(null);
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [activeId]);

  return (
    <section id="testimonials" className="min-h-[80vh] pt-24 md:pt-40">
      <div className="flex space-x-4">
        <div className="h-36 min-w-[8px] rounded-full border bg-gradient lg:h-[110px] lg:min-w-[8px]"></div>
        <div className="flex flex-col">
          <div className="space-y-4">
            <h1 className="text-3xl font-bold text-primary md:text-4xl md:font-semibold">
              Testimonials
            </h1>
            <p className="text-base font-normal leading-[140%] text-primary">
              Letters of appreciation from schools who trusted Vastraa for their
              annual day costumes and events.{" "}
              <br className="hidden lg:block" />
              Tap a letter to read it in full.
            </p>
          </div>
        </div>
      </div>

      <div className="relative mt-12">
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          plugins={[
            Autoplay({
              delay: 3500,
              stopOnInteraction: true,
              stopOnMouseEnter: true,
            }),
          ]}
          className="w-full"
        >
          <CarouselContent className="-ml-4">
            {testimonials.map((item) => (
              <CarouselItem
                key={item.id}
                className="basis-full pl-4 sm:basis-1/2 lg:basis-1/3"
              >
                <motion.button
                  type="button"
                  onClick={() => setActiveId(item.id)}
                  className="group flex h-full w-full flex-col overflow-hidden rounded-[16px] border border-[#E8E8E8] bg-[#FBFFFE] text-left shadow-md"
                  whileHover={{
                    y: -4,
                    boxShadow: "0 12px 28px rgba(0, 0, 0, 0.12)",
                  }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  <div className="aspect-[3/4] overflow-hidden bg-[#F5F5F5]">
                    <img
                      src={item.image}
                      alt={`Appreciation letter from ${item.school}`}
                      className="h-full w-full object-cover object-top transition-transform duration-300 group-hover:scale-[1.02]"
                      loading="lazy"
                    />
                  </div>
                  <div className="space-y-1 p-4">
                    <h2 className="text-base font-semibold text-primary">
                      {item.school}
                    </h2>
                    <p className="text-sm font-normal text-[#5A5A5A]">
                      {item.location} · {item.event}
                    </p>
                  </div>
                </motion.button>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="-left-4 border-[#E8E8E8] bg-[#FBFFFE] text-primary hover:bg-[#F5F5F5] disabled:opacity-40 md:-left-5" />
          <CarouselNext className="-right-4 border-[#E8E8E8] bg-[#FBFFFE] text-primary hover:bg-[#F5F5F5] disabled:opacity-40 md:-right-5" />
        </Carousel>
      </div>

      <AnimatePresence>
        {active && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveId(null)}
            role="dialog"
            aria-modal="true"
            aria-label={`Appreciation letter from ${active.school}`}
          >
            <motion.div
              className="relative max-h-[90vh] w-full max-w-2xl overflow-hidden rounded-[16px] bg-[#FBFFFE] shadow-2xl"
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.92, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 24 }}
              onClick={(event) => event.stopPropagation()}
            >
              <div className="flex items-start justify-between gap-4 border-b px-4 py-3">
                <div>
                  <h2 className="text-lg font-semibold text-primary">
                    {active.school}
                  </h2>
                  <p className="text-sm text-[#5A5A5A]">
                    {active.location} · {active.event}
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => setActiveId(null)}
                  className="rounded-full p-2 text-primary transition-colors hover:bg-[#F0F0F0]"
                  aria-label="Close letter"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
              <div className="max-h-[calc(90vh-72px)] overflow-y-auto">
                <img
                  src={active.image}
                  alt={`Appreciation letter from ${active.school}`}
                  className="w-full"
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

export default Testimonials;
