import img1 from "../assets/Copy of _M2A0279@1x.png"
import img2 from "../assets/Frame 91@1x.png"
import img3 from "../assets/Frame 79.png"
import img4 from "../assets/Frame 89@1x.png"
import img5 from "../assets/Frame 92@1x.png"
import img6 from "../assets/Frame 90@1x.png"
import img7 from "../assets/Frame 95@1x.png"
import img8 from "../assets/Frame 94.png"
import img9 from "../assets/Frame 94@1x.png"
import img10 from "../assets/Frame 80.png"
import img11 from "../assets/Frame 88@1x.png"
import img12 from "../assets/Frame 82.png"
import Card from "./Card"

const costumes = [
    {
        id: 1,
        title: "Character Costumes",
        image: img1
    },
    {
        id: 2,
        title: "Japanese Kimono",
        image: img2
    },
    {
        id: 3,
        title: "Yakshgana",
        image: img3
    },
    {
        id: 4,
        title: "Indian Army",
        image: img4
    },
    {
        id: 5,
        title: "Demon Costumes",
        image: img5
    },
    {
        id: 6,
        title: "Folk Costumes",
        image: img6
    },
    {
        id: 7,
        title: "Historical Costumes",
        image: img7
    },
    {
        id: 8,
        title: "Traditional Costumes",
        image: img8
    },
    {
        id: 9,
        title: "Classical Costumes",
        image: img9
    },
    {
        id: 10,
        title: "Egyptian Costume",
        image: img10
    },
    {
        id: 11,
        title: "Spanish Costumes",
        image: img11
    },
    {
        id: 12,
        title: "Chinese Costumes",
        image: img12
    },
]

function Costume() {
    return (
        <section id="costumes" className="min-h-screen mb-32 pt-40">
            <div className="flex space-x-6">
                <div className="bg-gradient lg:h-[104px] lg:min-w-[8px] min-w-[8px] border rounded-full"></div>
                <div className="space-y-4">
                    <h1 className="font-medium text-2xl lg:text-4xl">Cool Costume Collection!</h1>
                    <p className="text-primary font-normal">Our clients are at the heart of everything we do. We pride ourselves on delivering personalized, top-notch service to meet their unique needs. <br />
                        From individuals to organizations, our commitment to excellence ensures their events are truly unforgettable.</p>
                </div>
            </div>

            <div className="lg:grid lg:grid-cols-4 grid grid-cols-2 mt-12 gap-10 mb-10">
                {costumes.map((costume) => (
                    <Card key={costume.id} title={costume.title} image={costume.image} />
                ))}
            </div>
            <div className="ml-6">
                <p className="text-primary font-normal text-2xl">Discover a wide variety of styles, <span className="text-gradient">from classic to contemporary,<br /> </span>
                    ensuring the perfect fit for your event!!!</p>
            </div>
        </section>
    )
}

export default Costume