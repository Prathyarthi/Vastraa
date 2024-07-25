// import CarouselPlugin from "./Carousel"
import Carousel from "./Carousel"

// import side_img from "@/assets/side_img.png"
function Hero() {

    return (
        <section className="lg:w-full lg:h-[90vh] lg:items-center lg:justify-center flex mt-16 lg:mt-0">
            <div className="flex lg:justify-between  lg:flex-row flex-col-reverse w-full">
                <div className="lg:w-1/2 flex flex-col lg:place-content-center space-y-4 font-normal lg:text-start text-center mt-5 lg:mt-0">
                    <h1 className="text-2xl lg:text-[40px] leading-[120%] font-extralight">Make Every Occasion <br /> Extraordinary with <span className="text-gradient font-semibold"> Vastraa's <br /> Costumes and Events!</span>
                    </h1>
                    <div>
                        <p className="text-[#1B1B1E]">Transform your celebrations with Vastraa's exceptional <br /> costumes and event services. From grand weddings and <br /> themed parties to school annual days, Vastraa makes <br />
                        every occasion extraordinary.</p>
                    </div>
                    <div className="flex space-x-4">
                        <button className="bg-gradient font-semibold text-white px-6 py-2 rounded-lg w-[156px]">Costumes</button>
                        <button className="font-bold text-[#1B1B1E] border-black border-2 px-6 py-2 rounded-lg w-[156px]">Bulk Order?</button>
                    </div>
                </div>
                <div className="lg:w-1/2 lg:mt-8 flex">
                    <Carousel autoSlide={true} />
                    {/* <CarouselPlugin /> */}
                    {/* <img src={side_img} alt="side_img" className="h-[520px]" /> */}
                </div>
            </div>
        </section>
    )
}

export default Hero