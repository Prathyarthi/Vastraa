import { cn } from "@/lib/utils";

const Card = ({ image, className }: { image: string; className?: string }) => {
  return (
    <div
      className={cn(
        "flex w-full flex-col items-center overflow-hidden",
        className,
      )}
    >
      <div className="overflow-hidden rounded-[16px]">
        <img src={image} alt="project_image" className="w-auto" />
      </div>
    </div>
  );
};

export default Card;
