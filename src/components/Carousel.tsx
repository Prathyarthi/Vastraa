// import { ChevronLeft, ChevronRight } from "react-feather"
import image from "../assets/Image.png"
import image1 from "../assets/Image1.png"
import image2 from "../assets/Image2.png"
import image3 from "../assets/Image3.png"
import image4 from "../assets/Image4.png"
import { useEffect, useState } from "react"

const pics = [
    {
        id: 1,
        image: image
    },
    {
        id: 2,
        image: image1
    },
    {
        id: 3,
        image: image2
    },
    {
        id: 4,
        image: image3
    },
    {
        id: 5,
        image: image4
    },
]

function Carousel({ autoSlide = false }) {

    const [curr, setCurr] = useState(0)

    // const prev = () => {
    //     setCurr(curr === 0 ? pics.length - 1 : curr - 1)
    // }

    const next = () => {
        setCurr(curr === pics.length - 1 ? 0 : curr + 1)
    }

    useEffect(() => {
        if (!autoSlide) return

        const slideInterval = setInterval(next, 3000)
        return () => clearInterval(slideInterval)
    }, [curr])


    return (
        <div className="overflow-hidden">
            <div className="flex transition-transform ease-out duration-500" style={{ transform: `translateX(-${curr * 100}%)` }} >
                {pics.map((pic) => (
                    <img key={pic.id} src={pic.image} alt="pics" className="rounded-lg h-[400px]" />
                ))}
            </div>
            {/* <div className="absolute inset-0 flex items-center justify-between p-4 ">
                <button onClick={prev}>
                    <ChevronLeft className="text-white" size={40} />
                </button>
                <button onClick={next}>
                    <ChevronRight className="text-white" size={40} />
                </button>
            </div> */}
        </div>
    )
}

export default Carousel






// import * as React from "react"
// import Autoplay from "embla-carousel-autoplay"
// import image from "../assets/Image.png"

// import { Card, CardContent } from "@/components/ui/card"
// import {
//     Carousel,
//     CarouselContent,
//     CarouselItem,
//     CarouselNext,
//     CarouselPrevious,
// } from "@/components/ui/carousel"

// export default function CarouselPlugin() {
//     const plugin = React.useRef(
//         Autoplay({ delay: 2000, stopOnInteraction: true })
//     )

//     return (
//         <Carousel
//             plugins={[plugin.current]}
//             className="w-full"
//             onMouseEnter={plugin.current.stop}
//             onMouseLeave={plugin.current.reset}
//         >
//             <CarouselContent>
//                 {Array.from({ length: 5 }).map((_, index) => (
//                     <CarouselItem key={index}>
//                         <div className="p-1">
//                             <Card>
//                                 <CardContent className="flex aspect-square items-center justify-center p-6">
//                                     {/* <span className="text-4xl font-semibold">{index + 1}</span> */}
//                                     <img src={image} alt="image" className="rounded-[20px]" />
//                                 </CardContent>
//                             </Card>
//                         </div>
//                     </CarouselItem>
//                 ))}
//             </CarouselContent>
//             {/* <CarouselPrevious />
//             <CarouselNext /> */}
//         </Carousel>
//     )
// }
