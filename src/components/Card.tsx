const Card = ({
    title,
    image
}: {
    title: string;
    image: string;

}) => {
    return (
        <div className="max-w-sm overflow-hidden">
            <div className="overflow-hidden rounded-lg border">
                <img
                    src={image}
                    alt="project_image"
                    className="md:w-full md:h-[283px] transition-transform duration-300 ease-in-out transform hover:scale-105"
                />
            </div>
            <div className="py-4 flex flex-col">
                <h1 className="font-medium lg:font-normal text-md mb-2 text-center">
                    {title}
                </h1>
            </div>
        </div>
    );
};

export default Card;