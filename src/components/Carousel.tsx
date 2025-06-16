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
        <div className="absolute -inset-x-64 bottom-0 bg-gradient-to-t from-white/100 pt-[30%]" />
        <div className="absolute -inset-x-64 -top-32 rotate-90 bg-gradient-to-t from-white/100 pt-[30%] sm:right-12 xl:right-52" />
        <div className="absolute -inset-x-64 -top-32 -rotate-90 bg-gradient-to-t from-white/100 pt-[30%] sm:left-12 xl:left-52" />
      </div>
    </div>
  );
};

export default Carousel;
