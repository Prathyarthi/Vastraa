import img1 from "../assets/logo-1-3@1x.png"
import img2 from "../assets/cropped-vydehi_logo1@1x.png"
import img3 from "../assets/_image@1x.png"
import img4 from "../assets/wf-logo-150x150@1x.png"
import img5 from "../assets/Sanjay-Ghodawat-International-School-3-e1689178667639@1x.png"
import img6 from "../assets/snis-logo1@1x.png"
import img7 from "../assets/logo.png@1x.png"
import img8 from "../assets/logo@1x.png"

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
    },
    {
        id: 5,
        image: img5
    },
    {
        id: 6,
        image: img6
    },
    {
        id: 7,
        image: img7
    },
    {
        id: 8,
        image: img8
    },
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
    },
    {
        id: 5,
        image: img5
    },
    {
        id: 6,
        image: img6
    },
    {
        id: 7,
        image: img7
    },
    {
        id: 8,
        image: img8
    },
]

function Client_section() {
    return (
        <section id="#clients" className="lg:w-full flex-col mt-16 lg:mt-0 lg:relative hidden">
            <div className="w-full mt-20">
                <div className="flex justify-center flex-col text-center space-y-2">
                    <h1 className="text-primary font-semibold text-3xl lg:mt-32">Our Clients</h1>
                    <p className="text-primary font-normal">Our clients are at the heart of everything we do. We pride ourselves on delivering personalized, top-notch service to meet their unique needs. <br />
                        From individuals to organizations, our commitment to excellence ensures their events are truly unforgettable.</p>
                </div>
            </div>

            <div className="w-full flex overflow-hidden lg:space-x-8 group lg:mx-[20px] mt-10">
                <div className="flex lg:space-x-8 space-x-8 w-full lg:justify-center lg:items-center animate-scroll group-hover:paused gap-x-8">
                    {pics.map((pic) => (
                        <img src={pic.image} alt="img" />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Client_section