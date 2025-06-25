import { useEffect, useRef, FC } from "react";
import { motion } from "motion/react";
import "../components/carousal.css";

interface Image {
  id: number;
  image: string;
}

interface CarouselProps {
  images: Image[];
  delay?: number;
}

const Carousel: FC<CarouselProps> = ({ images, delay = 2000 }) => {
  const carouselRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const carousel = carouselRef.current;
    let start: number | null = null;
    let animationFrameId: number;

    const animate = (timestamp: number) => {
      if (!start) start = timestamp;
      const elapsed = timestamp - start;

      if (elapsed > delay) {
        start = timestamp;
        if (carousel) {
          carousel.appendChild(carousel.firstElementChild!);
          carousel.style.transition = "none";
          carousel.style.transform = "translateX(0)";
          requestAnimationFrame(() => {
            carousel.style.transition = "transform 0.5s ease-in-out";
            carousel.style.transform = `translateX(-${
              carousel.firstElementChild!.clientWidth
            }px)`;
          });
        }
      }
      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrameId);
  }, [delay]);

  return (
    <motion.div
      className="relative cursor-pointer overflow-hidden rounded-[16px] lg:w-[75%]"
      whileHover={{ scale: 1.02 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      <div className="carousel flex" ref={carouselRef}>
        {images.map((image) => (
          <img
            key={image.id}
            src={image.image}
            alt={`Slide ${image.id}`}
            className="carousel-image transition-all duration-300 hover:brightness-110"
          />
        ))}
      </div>
      <div aria-hidden="true" className="relative">
        <div className="absolute -inset-x-64 bottom-0 bg-gradient-to-t from-white/100 pt-[30%]" />
        <div className="absolute -inset-x-64 -top-32 hidden rotate-90 bg-gradient-to-t from-white/100 pt-[30%] sm:right-12 md:block xl:right-52" />
        <div className="absolute -inset-x-64 -top-32 hidden -rotate-90 bg-gradient-to-t from-white/100 pt-[30%] sm:left-12 md:block xl:left-52" />
      </div>
    </motion.div>
  );
};

export default Carousel;
