// // import { ChevronLeft, ChevronRight } from "react-feather"
// import classical from "../assets/Classical@1x.png"
// import krishna from "../assets/Krishna@1x.png"
// import doctor from "../assets/Doctor@1x.png"
// import dance from "../assets/Dance@1x.png"
// import chinese from "../assets/Chinese@1x.png"
// import halloween from "../assets/Hallween@1x.png"
// import animal from "../assets/Animal@1x.png"
// import { useEffect, useState } from "react"

// const pics = [
//     {
//         id: 1,
//         image: classical
//     },
//     {
//         id: 2,
//         image: krishna
//     },
//     {
//         id: 3,
//         image: doctor
//     },
//     {
//         id: 4,
//         image: dance
//     },
//     {
//         id: 5,
//         image: chinese
//     },
//     {
//         id: 6,
//         image: halloween
//     },
//     {
//         id: 7,
//         image: animal
//     },
// ]

// function Carousel({ autoSlide = false }) {

//     const [curr, setCurr] = useState(0)

//     // const prev = () => {
//     //     setCurr(curr === 0 ? pics.length - 1 : curr - 1)
//     // }

//     const next = () => {
//         setCurr(curr === pics.length - 1 ? 0 : curr + 1)
//     }

//     useEffect(() => {
//         if (!autoSlide) return
//         const slideInterval = setInterval(next, 3000)
//         return () => clearInterval(slideInterval)
//     }, [curr])


//     return (
//         <div className="overflow-hidden">
//             <div className="flex transition-all ease-in-out duration-500" style={{ transform: `translateX(-${curr * 100}%)` }} >
//                 {pics.map((pic) => (
//                     <img key={pic.id} src={pic.image} alt="pics" className="" />
//                 ))}
//             </div>
//             {/* <div className="absolute inset-0 flex items-center justify-between p-4 ">
//                 <button onClick={prev}>
//                     <ChevronLeft className="text-white" size={40} />
//                 </button>
//                 <button onClick={next}>
//                     <ChevronRight className="text-white" size={40} />
//                 </button>
//             </div> */}
//         </div>
//     )
// }

// export default Carousel


import { useEffect, useRef } from 'react';
import './carousal.css';

const Carousel = ({ images, delay = 2000 }) => {
    const carouselRef = useRef(null);

    useEffect(() => {
        const carousel = carouselRef.current;
        let start;
        let animationFrameId;

        const animate = (timestamp) => {
            if (!start) start = timestamp;
            const elapsed = timestamp - start;

            if (elapsed > delay) {
                start = timestamp;
                carousel.appendChild(carousel.firstElementChild);
                carousel.style.transition = 'none';
                carousel.style.transform = 'translateX(0)';
                requestAnimationFrame(() => {
                    carousel.style.transition = 'transform 0.5s';
                    carousel.style.transform = `translateX(-${carousel.firstElementChild.clientWidth}px)`;
                });
            }
            animationFrameId = requestAnimationFrame(animate);
        };

        animationFrameId = requestAnimationFrame(animate);

        return () => cancelAnimationFrame(animationFrameId);
    }, [delay]);

    return (
        <div className="carousel-container">
            <div className="carousel h-[530px]" ref={carouselRef}>
                {images.map((image, index) => (
                    <img key={index} src={image.image} alt={`Slide ${index}`} className="carousel-image" />
                ))}
            </div>
        </div>
    );
};

export default Carousel;
