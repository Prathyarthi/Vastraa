import { useEffect, useRef, FC } from "react";
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
            carousel.style.transition = "transform 0.5s";
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
    <div className="overflow-hidden rounded-[16px] lg:w-[75%]">
      <div className="carousel flex" ref={carouselRef}>
        {images.map((image) => (
          <img
            key={image.id}
            src={image.image}
            alt={`Slide ${image.id}`}
            className="carousel-image"
          />
        ))}
      </div>
      <div aria-hidden="true" className="relative">
        <div className="absolute bottom-0 -inset-x-64 bg-gradient-to-t from-white/100 pt-[30%]" />
        <div className="absolute right-10 -top-32 -inset-x-64 bg-gradient-to-t from-white/100 pt-[30%] rotate-90" />
        <div className="absolute left-10 -top-32 -inset-x-64 bg-gradient-to-t from-white/100 pt-[30%] -rotate-90" />
      </div>
    </div>
  );
};

export default Carousel;
