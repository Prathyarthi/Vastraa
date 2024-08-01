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
            <div className="lg:grid lg:grid-cols-2 lg:gap-4">
                <div className="flex space-x-4">
                    <div className="bg-gradient lg:h-[148px] lg:min-w-[8px] min-w-[8px] border rounded-full h-48"></div>
                    <div className="flex flex-col">
                        <div className="space-y-4">
                            <h1 className="font-bold text-4xl text-primary">Why Vastraa?</h1>
                            <p>Vastraa is more than just a costume provider; we are your <br className="hidden lg:block" />partners in creating unforgettable experiences. Our extensive <br className="hidden lg:block" /> collection and personalized service ensure you find the perfect <br className="hidden lg:block" /> attire for any event.</p>
                        </div>

                        <div className="mt-10 space-y-6">
                            <h3 className="font-medium text-gradient">Benefits:</h3>
                            <ul className="space-y-4 list-disc ml-3 marker:text-gradient">
                                <li><span className="text-gradient">Wide Range of Collections:</span> From fashion show outfits to bridal wear, we have something for every occasion.</li>
                                <li><span className="text-gradient">Customization:</span> Our team can design bespoke costumes tailored to your needs.</li>
                                <li><span className="text-gradient">Quality:</span> We prioritize quality to ensure you look and feel your best.</li>
                                <li><span className="text-gradient">Convenience:</span> One-stop solution for all your costume and event needs.</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="flex mt-10 lg:mt-0">
                    <div className="grid grid-cols-2 gap-8">
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