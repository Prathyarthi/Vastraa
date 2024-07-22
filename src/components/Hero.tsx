// import CarouselPlugin from "./Carousel"
import Carousel from "./Carousel"
function Hero() {

    return (
        <section className="lg:w-full lg:h-[90vh] justify-center items-center flex mt-16 lg:mt-0">
            <div className="lg:justify-between flex lg:flex-row flex-col-reverse items-center">
                <div className="lg:w-1/2 flex flex-col lg:place-content-center space-y-4 font-normal lg:text-start text-center mt-5">
                    <h1 className="text-2xl lg:text-[40px] leading-[120%] font-extralight">Make Every Occasion <br /> Extraordinary with <span className="text-gradient font-semibold"> Vastraa's <br /> Costumes and Events!</span>
                    </h1>
                    <div>
                        <button className="bg-primary font-semibold text-white px-6 py-2 rounded-lg">Bulk Order?</button>
                    </div>
                </div>
                <div className="lg:w-1/2">
                    <Carousel autoSlide={true} />
                    {/* <CarouselPlugin /> */}
                </div>
            </div>
        </section>
    )
}

export default Hero