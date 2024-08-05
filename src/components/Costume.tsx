import classical from "../assets/Frame 54@1x.png"
import Card from "./Card"

const costumes = [
    {
        id: 1,
        title: "Cool Costume Collection!",
        image: classical
    },
    {
        id: 2,
        title: "Cool Costume Collection!",
        image: classical
    },
    {
        id: 3,
        title: "Cool Costume Collection!",
        image: classical
    },
    {
        id: 4,
        title: "Cool Costume Collection!",
        image: classical
    },
    {
        id: 5,
        title: "Cool Costume Collection!",
        image: classical
    },
    {
        id: 6,
        title: "Cool Costume Collection!",
        image: classical
    },
    {
        id: 7,
        title: "Cool Costume Collection!",
        image: classical
    },
    {
        id: 8,
        title: "Cool Costume Collection!",
        image: classical
    },
    {
        id: 9,
        title: "Cool Costume Collection!",
        image: classical
    },
    {
        id: 10,
        title: "Cool Costume Collection!",
        image: classical
    },
    {
        id: 11,
        title: "Cool Costume Collection!",
        image: classical
    },
    {
        id: 12,
        title: "Cool Costume Collection!",
        image: classical
    },
]

function Costume() {
    return (
        <section id="costumes" className="min-h-screen mb-32">
            <div className="flex space-x-6">
                <div className="bg-gradient lg:h-[104px] lg:min-w-[8px] min-w-[8px] border rounded-full"></div>
                <div className="space-y-4">
                    <h1 className="font-bold text-2xl lg:text-4xl">Cool Costume Collection!</h1>
                    <p>Our clients are at the heart of everything we do. We pride ourselves on delivering personalized, top-notch service to meet their unique needs.
                        From individuals to organizations, our commitment to excellence ensures their events are truly unforgettable.</p>
                </div>
            </div>

            <div className="lg:grid lg:grid-cols-4 grid grid-cols-2 mt-12 gap-10 mb-10">
                {costumes.map((costume) => (
                    <Card key={costume.id} title={costume.title} image={costume.image} />
                ))}
            </div>
            <div className="ml-6">
                <p className="text-primary font-semibold text-2xl">Discover a wide variety of styles, <span className="text-gradient">from classic to contemporary,<br /> </span>
                    ensuring the perfect fit for your event!!!</p>
            </div>
        </section>
    )
}

export default Costume