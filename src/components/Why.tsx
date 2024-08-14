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
        <section className="min-h-[80vh] pt-24 mb-24">
            <div className="lg:grid lg:grid-cols-2 lg:gap-20">
                <div className="flex space-x-4">
                    <div className="bg-gradient lg:h-[120px] lg:min-w-[8px] min-w-[8px] border rounded-full h-28"></div>
                    <div className="flex flex-col">
                        <div className="space-y-4">
                            <h1 className="font-bold md:font-medium md:text-4xl text-3xl text-primary">Team</h1>
                            <p className="text-[#1B1B1E] font-medium">Expert Team with Dance and Art Backgrounds <br className="hidden lg:block" />
                                Crafting Unique Costumes</p>
                        </div>

                        <div className="mt-10 space-y-6 font-normal">
                            <p>Vastraa's team is composed of talented individuals with diverse backgrounds in dance and art. Our experts bring a unique perspective to costume design, blending their extensive experience in performance with artistic flair. This combination ensures that every costume we offer is not only visually striking but also thoughtfully crafted to enhance your experience.
                            </p>
                            <p>
                                From intricate details to creative concepts, our team's passion and expertise drive our commitment to delivering exceptional costumes that make every event memorable. Discover the talent behind Vastraa and see how their background elevates your costume rental experience.
                            </p>
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