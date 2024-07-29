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

                <div className="flex justify-center flex-col">
                    <p><span className="text-gradient">.</span><span className="text-gradient">Fashion Show Outfits:</span> Stylish and trendy outfits for the runway.</p>
                    <p>Graduation Gowns: Elegant gowns for your big day.</p>
                    <p>Pre-Wedding Gowns: Beautiful gowns for pre-wedding celebrations.</p>
                    <p>Groom & Bridal Wear: Stunning attire for the bride and groom.</p>
                    <p>Jewelleries: Exquisite pieces to complement any outfit.</p>
                    <p>Blazers & Suits: Classic and refined blazers & suits.</p>
                    <p>Lehengas: Gorgeous traditional attire.</p>
                    <h2>
                        Our expert team ensures a seamless and spectacular experience, turning your vision into reality and creating lasting memories.
                    </h2>

                </div>
            </div>
        </section>
    )
}

export default Fashion