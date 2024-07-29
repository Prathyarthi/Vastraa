import Carousel from "./Carousel"

import classical from "../assets/Classical@1x.png"
import krishna from "../assets/Krishna@1x.png"
import doctor from "../assets/Doctor@1x.png"
import dance from "../assets/Dance@1x.png"
import chinese from "../assets/Chinese@1x.png"
import halloween from "../assets/Hallween@1x.png"
import animal from "../assets/Animal@1x.png"

const pics = [
    {
        id: 1,
        image: classical
    },
    {
        id: 2,
        image: krishna
    },
    {
        id: 3,
        image: doctor
    },
    {
        id: 4,
        image: dance
    },
    {
        id: 5,
        image: chinese
    },
    {
        id: 6,
        image: halloween
    },
    {
        id: 7,
        image: animal
    },
]

function Event() {
    return (
        <section className="">
            <div className="flex space-x-4">
                <div className="bg-gradient h-[104px] w-[12px] border rounded-full"></div>
                <div className="space-y-4">
                    <h1 className="font-bold text-3xl">Event Management</h1>
                    <p>Make your event unforgettable with our comprehensive management services. From sound and lighting to wedding planning, choreography, LED walls, and carnival events, we handle every detail with precision and creativity. Let us bring your vision to life!</p>
                </div>
            </div>

            <div className="grid grid-cols-2">
                <div>
                    <Carousel images={pics} />
                </div>

                <div className="flex justify-center flex-col">
                    <p>Sound and Lighting: Professional audio and visual setups for an immersive experience.</p>
                    <p>Wedding Planning: From venue selection to decor, we handle every detail of your big day.</p>
                    <p>Choreography: Expert choreography services to make your events lively and entertaining.</p>
                    <p>LED Walls: High - quality LED walls for dynamic and engaging displays.</p>
                    <p>Carnival Events: Fun - filled carnival setups to create a festive atmosphere.</p>
                    <p>School Annual Day: Fun - filled carnival setups to create a festive atmosphere.</p>
                    <p>Our expert team ensures a seamless and spectacular experience, turning your vision into reality and creating lasting memories.</p>
                </div>
            </div>
        </section >
    )
}

export default Event