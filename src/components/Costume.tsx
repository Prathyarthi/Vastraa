import classical from "../assets/Classical@1x.png"
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
        <section className="">
            <div className="flex space-x-4">
                <div className="bg-gradient h-[104px] w-[12px] border rounded-full"></div>
                <div className="space-y-4">
                    <h1 className="font-bold text-3xl">Cool Costume Collection!</h1>
                    <p>Our clients are at the heart of everything we do. We pride ourselves on delivering personalized, top-notch service to meet their unique needs.
                        From individuals to organizations, our commitment to excellence ensures their events are truly unforgettable.</p>
                </div>
            </div>

            <div className="grid grid-cols-4 my-10 gap-4">
                {costumes.map((costume) => (
                    // <div className="h-[260px] w-full border rounded-lg overflow-hidden">
                    //     <img className="" src={costume.image} alt={costume.title} />
                    // </div>
                    <Card key={costume.id} title={costume.title} image={costume.image} />
                ))}
            </div>
        </section>
    )
}

export default Costume