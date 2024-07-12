// import { ChevronLeft, ChevronRight } from "react-feather"
import image from "../assets/Image.png"
import { useEffect, useState } from "react"

const pics = [
    {
        id: 1,
        image: image
    },
    {
        id: 2,
        image: image
    },
    {
        id: 3,
        image: image
    },
    {
        id: 4,
        image: image
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
                    <img key={pic.id} src={pic.image} alt="pics" className="" />
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