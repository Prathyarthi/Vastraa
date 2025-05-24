const Card = ({ image }: { image: string }) => {
  return (
    <div className="flex flex-col items-center max-w-sm overflow-hidden">
      <div className="overflow-hidden rounded-[16px]">
        <img src={image} alt="project_image" />
      </div>
    </div>
  );
};

export default Card;
