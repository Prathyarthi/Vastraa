const Card = ({
    title,
    image
}: {
    title: string;
    image: string;

}) => {
    return (
        <div className="max-w-sm overflow-hidden">
            <div className="overflow-hidden rounded-[16px]">
                <img
                    src={image}
                    alt="project_image"
                    className="md:w-[250px] md:h-[250px] transition-transform duration-300 ease-in-out transform hover:scale-105"
                />
            </div>
            <h1 className="font-medium lg:font-normal text-md mb-2 text-center py-4">
                {title}
            </h1>
        </div>
    );
};

export default Card;