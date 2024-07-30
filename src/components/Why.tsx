import classical from "../assets/Classical@1x.png"
import krishna from "../assets/Krishna@1x.png"
import doctor from "../assets/Doctor@1x.png"
import dance from "../assets/Dance@1x.png"

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
    }
]

function Why() {
    return (
        <section className="h-screen">
            <div className="grid grid-cols-2 gap-4">
                <div className="flex space-x-4">
                    <div className="bg-gradient h-[128px] w-[12px] border rounded-full"></div>
                    <div className="space-y-4">
                        <h1 className="font-bold text-3xl text-primary">Why Vastraa?</h1>
                        <p>Vastraa is more than just a costume provider; we are your partners in creating unforgettable experiences. Our extensive collection and personalized service ensure you find the perfect attire for any event.</p>
                    </div>
                </div>

                <div className="flex">
                    <div className="grid grid-cols-2">
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