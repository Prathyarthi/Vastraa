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

                <div className="flex justify-center flex-col lg:ml-5">
                    <ul className="space-y-4 text-md list-disc marker:text-gradient font-medium">
                        <li><span className="text-gradient">Sound and Lighting:</span> Professional audio and visual setups for an immersive experience.</li>
                        <li><span className="text-gradient">Wedding Planning:</span> From venue selection to decor, we handle every detail of your big day.</li>
                        <li><span className="text-gradient">Choreography:</span> Expert choreography services to make your events lively and entertaining.</li>
                        <li><span className="text-gradient">LED Walls:</span> High - quality LED walls for dynamic and engaging displays.</li>
                        <li><span className="text-gradient">Carnival Events:</span> Fun - filled carnival setups to create a festive atmosphere.</li>
                        <li><span className="text-gradient">School Annual Day:</span> Fun - filled carnival setups to create a festive atmosphere.</li>
                    </ul>
                    <h2>Our expert team ensures a seamless and spectacular experience, turning your vision into reality and creating lasting memories.</h2>
                </div>
            </div>
        </section >
    )
}

export default Event