import { ReactElement } from "react";
import { motion } from "motion/react";

function FeatureCard({
  icon,
  title,
  description,
}: {
  icon: ReactElement;
  title: string;
  description: string;
}) {
  return (
    <motion.div
      className="group flex cursor-pointer flex-col justify-center rounded-[16px] border bg-[#FBFFFE] px-5 py-[16px] shadow-lg md:h-[250px] md:w-auto lg:space-y-4 lg:py-[8px]"
      whileHover={{ y: -8, scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      <div className="mb-3 flex space-x-3 lg:mb-0 lg:flex-col lg:space-x-0 lg:space-y-3">
        <motion.div
          className="text-gradient"
          whileHover={{ scale: 1.1, rotate: 5 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          {icon}
        </motion.div>
        <motion.h1
          className="font-bold text-primary md:font-semibold"
          initial={{ opacity: 0.9 }}
          whileHover={{ opacity: 1 }}
        >
          {title}
        </motion.h1>
      </div>
      <motion.p
        className="font-normal text-primary"
        initial={{ opacity: 0.8 }}
        whileHover={{ opacity: 1 }}
      >
        {description}
      </motion.p>
    </motion.div>
  );
}

export default FeatureCard;
