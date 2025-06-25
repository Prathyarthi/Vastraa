import { motion } from "motion/react";

function Banner() {
  return (
    <div className="flex w-full items-center justify-center bg-primary pb-8 pt-8">
      <motion.p
        className="text-center text-lg font-medium text-[#FBFFFE]"
        animate={{
          opacity: [0.8, 1, 0.8],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      >
        Unforgettable Moments Start Here: Discover Vastraa's Magical Costumes
        for Every Event!
      </motion.p>
    </div>
  );
}

export default Banner;
