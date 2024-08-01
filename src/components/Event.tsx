import Carousel from "./Carousel"

import frame1 from "../assets/Frame 69@1x.png"
import frame2 from "../assets/Frame 75@1x.png"
import frame3 from "../assets/Frame 76@1x.png"
import frame4 from "../assets/Frame 77@1x.png"
import frame5 from "../assets/Frame 73@1x.png"

const pics = [
    {
        id: 1,
        image: frame1
    },
    {
        id: 2,
        image: frame2
    },
    {
        id: 3,
        image: frame3
    },
    {
        id: 4,
        image: frame4
    },
    {
        id: 5,
        image: frame5
    }
]

function Event() {
    return (
        <section className="min-h-screen mb-32">
            <div className="flex space-x-6">
                <div className="bg-gradient lg:h-[104px] lg:min-w-[8px] border rounded-full min-w-[8px]"></div>
                <div className="space-y-4">
                    <h1 className="font-medium text-2xl lg:text-4xl">Event Management</h1>
                    <p className="text-base text-primary font-normal leading-[140%]">Make your event unforgettable with our comprehensive management services. From sound and lighting to wedding planning, choreography, LED walls, and carnival events, we handle every detail with precision and creativity. Let us bring your vision to life!</p>
                </div>
            </div>

            <div className="lg:grid lg:grid-cols-2 lg:justify-between mt-16 flex flex-col px-5 lg:p-0">
                <div className="">
                    <Carousel images={pics} />
                </div>

                <div className="mt-4 flex">
                    <ul className="space-y-4 text-base list-disc lg:ml-10 marker:text-gradient font-medium text-primary">
                        <li><span className="text-gradient">Sound and Lighting:</span> Professional audio and visual setups for an immersive experience.</li>
                        <li><span className="text-gradient">Wedding Planning:</span> From venue selection to decor, we handle every detail of your big day.</li>
                        <li><span className="text-gradient">Choreography:</span> Expert choreography services to make your events lively and entertaining.</li>
                        <li><span className="text-gradient">LED Walls:</span> High - quality LED walls for dynamic and engaging displays.</li>
                        <li><span className="text-gradient">Carnival Events:</span> Fun - filled carnival setups to create a festive atmosphere.</li>
                        <li><span className="text-gradient">School Annual Day:</span> Fun - filled carnival setups to create a festive atmosphere.</li>
                        <h2 className="-ml-5">Our expert team ensures a seamless and spectacular experience, turning your vision into reality and creating lasting memories.</h2>
                    </ul>
                </div>
            </div>
        </section >
    )
}

export default Event