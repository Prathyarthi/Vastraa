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
function Fashion() {
    return (
        <section className="">
            <div className="flex space-x-4">
                <div className="bg-gradient h-[104px] w-[12px] border rounded-full"></div>
                <div className="space-y-4">
                    <h1 className="font-bold text-3xl">Fashion,<span className="text-gradient">Maternity,</span> Pre-Wedding,<span className="text-gradient">Bridal Collections</span> & More!</h1>
                    <p>Explore our extensive collection of costumes, including fashion, maternity, pre-wedding, and bridal wear. Find the perfect attire for every special occasion in one place.</p>
                </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
                <div className="">
                    <Carousel images={pics} />
                </div>

                <div className="flex justify-center flex-col lg:ml-5">
                    <ul className="space-y-4 text-md list-disc marker:text-gradient font-medium">
                        <li><span className="text-gradient">Fashion Show Outfits:</span> Stylish and trendy outfits for the runway.</li>
                        <li><span className="text-gradient">Graduation Gowns:</span> Elegant gowns for your big day.</li>
                        <li><span className="text-gradient">Pre-Wedding Gowns:</span> Beautiful gowns for pre-wedding celebrations.</li>
                        <li><span className="text-gradient">Groom & Bridal Wear:</span> Stunning attire for the bride and groom.</li>
                        <li><span className="text-gradient">Jewelleries:</span> Exquisite pieces to complement any outfit.</li>
                        <li><span className="text-gradient">Blazers & Suits:</span> Classic and refined blazers & suits.</li>
                        <li><span className="text-gradient">Lehengas:</span> Gorgeous traditional attire.</li>
                    </ul>
                    <h2>
                        Our expert team ensures a seamless and spectacular experience, turning your vision into reality and creating lasting memories.
                    </h2>
                </div>
            </div>
        </section>
    )
}

export default Fashion