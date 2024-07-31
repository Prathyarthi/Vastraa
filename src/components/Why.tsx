import img1 from "../assets/Frame 79@1x.png"
import img2 from "../assets/Frame 80@1x.png"
import img3 from "../assets/Frame 81@1x.png"
import img4 from "../assets/Frame 82@1x.png"

const pics = [
    {
        id: 1,
        image: img1
    },
    {
        id: 2,
        image: img2
    },
    {
        id: 3,
        image: img3
    },
    {
        id: 4,
        image: img4
    }
]

function Why() {
    return (
        <section className="min-h-screen">
            <div className="grid grid-cols-2 gap-4">
                <div className="flex space-x-4">
                    <div className="bg-gradient lg:h-[148px] lg:min-w-[8px] border rounded-full"></div>
                    <div className="space-y-4">
                        <h1 className="font-bold text-3xl text-primary">Why Vastraa?</h1>
                        <p>Vastraa is more than just a costume provider; we are your <br />partners in creating unforgettable experiences. Our extensive <br /> collection and personalized service ensure you find the perfect <br /> attire for any event.</p>
                    </div>
                </div>

                <div className="flex">
                    <div className="grid grid-cols-2 gap-5">
                        {pics.map((pic) => (
                            <img src={pic.image} alt="" />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Why