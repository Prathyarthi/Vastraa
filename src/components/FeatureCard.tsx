import { ReactElement } from "react";

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
    <div className="flex flex-col justify-center rounded-[16px] border bg-[#FBFFFE] px-5 py-[16px] shadow-lg md:h-[250px] md:w-auto lg:space-y-4 lg:py-[8px]">
      <div className="mb-3 flex space-x-3 lg:mb-0 lg:flex-col lg:space-x-0 lg:space-y-3">
        <div className="text-gradient">{icon}</div>
        <h1 className="font-bold text-primary md:font-semibold">{title}</h1>
      </div>
      <p className="font-normal text-primary">{description}</p>
    </div>
  );
}

export default FeatureCard;
