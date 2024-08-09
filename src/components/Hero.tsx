// import CarouselPlugin from "./Carousel"
import Carousel from "./Carousel"
import krishna from "../assets/Frame 127@1x.png"
import animal from "../assets/Frame 125@1x.png"
import disco from "../assets/Frame 126@1x.png"
import freedom from "../assets/Frame 128@1x.png"
import superhero from "../assets/Frame 129@1x.png"
import retero from "../assets/Frame 130@1x.png"
import halloween from "../assets/Frame 131@1x.png"
import dance from "../assets/Frame 132@1x.png"
import doctor from "../assets/Frame 133@1x.png"
import classical from "../assets/Frame 136@1x.png"

import Banner from "./Banner"

const pics = [
    {
        id: 1,
        image: krishna
    },
    {
        id: 2,
        image: animal
    },
    {
        id: 3,
        image: disco
    },
    {
        id: 4,
        image: freedom
    },
    {
        id: 5,
        image: superhero
    },
    {
        id: 6,
        image: retero
    },
    {
        id: 7,
        image: halloween
    },
    {
        id: 8,
        image: dance
    },
    {
        id: 9,
        image: doctor
    },
    {
        id: 10,
        image: classical
    },
]
// import side_img from "@/assets/side_img.png"
function Hero() {

    return (
        <section className="lg:w-full lg:h-[80vh] lg:items-center lg:justify-center flex flex-col mt-8 lg:mt-0">
            <div className="flex lg:justify-between lg:flex-row flex-col-reverse w-full">

                <div className="lg:w-1/2 flex flex-col lg:place-content-center space-y-4 font-normal lg:text-start text-center mt-5 lg:mt-0">
                    <h1 className="text-2xl lg:text-[30px] leading-[120%] font-normal">Make Every Events <br /> Extraordinary with <span className="text-gradient font-medium"> Vastraa's <br /> Costumes and Events!</span>
                    </h1>
                    <div>
                        <p className="text-[#1B1B1E] text-lg leading-[150%] font-[24px]">Transform your celebrations with Vastraa's exceptional <br className="hidden lg:block" /> costumes and event services. From grand weddings and <br className="hidden lg:block" /> themed parties to school annual days, Vastraa makes <br className="hidden lg:block" />
                            every occasion extraordinary.</p>
                    </div>
                    <div className="flex space-x-4 justify-center lg:justify-start">
                        <button className="bg-gradient font-normal text-white px-6 py-2 rounded-lg w-[156px]">Costumes</button>
                        <button className="font-bold text-[#1B1B1E] border-black border-2 px-6 py-2 rounded-lg w-[156px]">Bulk Order?</button>
                    </div>
                </div>

                <div className="lg:w-1/2 flex lg:justify-end">
                    {/* <Carousel autoSlide={true} /> */}
                    <Carousel images={pics} />

                    {/* <CarouselPlugin /> */}
                    {/* <img src={side_img} alt="side_img" className="h-[520px]" /> */}
                </div>
            </div>
            <div className="w-full absolute bottom-0">
                <Banner />
            </div>
        </section>
    )
}

export default Hero