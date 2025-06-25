import { useEffect, useRef, FC, useState } from "react";
import "../components/carousal.css";
import { motion } from "motion/react";

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
  }, [delay, images.length]);

  return (
    <motion.div
      className="carousel-container w-[100%] rounded-[16px]"
      whileHover={{ scale: 1.02 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      <div className="carousel" ref={carouselRef}>
        {images.map((image) => (
          <motion.img
            key={image.id}
            src={image.image}
            alt={`Slide ${image.id}`}
            className="carousel-image"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          />
        ))}
      </div>

      <div className="mt-10 flex justify-center space-x-5">
        {images.map((_, index) => (
          <motion.button
            key={index}
            className={`h-3 w-3 rounded-full ${
              index === currentIndex ? "bg-gradient/50" : "bg-gray-300"
            }`}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          />
        ))}
      </div>
    </motion.div>
  );
};

export default CarouselComponent;
