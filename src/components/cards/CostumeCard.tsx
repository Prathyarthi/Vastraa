import { cn } from "@/lib/utils";
import { motion } from "motion/react";

const Card = ({ image, className }: { image: string; className?: string }) => {
  return (
    <motion.div
      className={cn(
        "group flex w-full cursor-pointer flex-col items-center overflow-hidden",
        className,
      )}
      whileHover={{ y: -8 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      <div className="overflow-hidden rounded-[16px] shadow-md transition-shadow duration-300 group-hover:shadow-xl">
        <motion.img
          src={image}
          alt="project_image"
          className="w-auto"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        />
      </div>
    </motion.div>
  );
};

export default Card;
