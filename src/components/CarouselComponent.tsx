import { useEffect, useRef, FC, useState } from "react";
import "../components/carousal.css";

interface Image {
  id: number;
  image: string;
}

interface CarouselProps {
  images: Image[];
  delay?: number;
}

const CarouselComponent: FC<CarouselProps> = ({ images, delay = 2000 }) => {
  const carouselRef = useRef<HTMLDivElement | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

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
          setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
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
    <div className="carousel-container rounded-[16px] w-[100%]">
      <div className="carousel" ref={carouselRef}>
        {images.map((image) => (
          <img
            key={image.id}
            src={image.image}
            alt={`Slide ${image.id}`}
            className="carousel-image"
          />
        ))}
      </div>

      <div className="flex space-x-5 mt-10 justify-center">
        {images.map((_, index) => (
          <button
            key={index}
            className={`rounded-full w-3 h-3 ${
              index === currentIndex ? "bg-gradient/50" : "bg-gray-300"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default CarouselComponent;
