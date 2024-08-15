import { ArrowLeft } from "lucide-react"
import blogimg1 from "../assets/BlogImg1.png"
import blogimg2 from "../assets/blogImg2.png"
import blogimg3 from "../assets/BlogImg3.png"
import blogimg4 from "../assets/BlogImg4.png"
import blogimg5 from "../assets/BlogImg5.png"

function Blogs() {
    return (
        <section id="blogs" className="min-h-[80vh] md:pt-40 pt-24">
            <div className="flex justify-between">
                <h1 className="font-bold md:font-medium md:text-4xl text-3xl text-primary">Blogs</h1>
                <i><ArrowLeft /></i>
            </div>
            <div className="lg:grid grid-cols-12 gap-2 mt-5">
                <div className="col-span-7 flex flex-col space-y-7">
                    <div className="space-y-3">
                        <img src={blogimg1} alt="blogimg1" />
                        <p className="text-[#555555] font-normal text-sm">15th August, 2024</p>
                    </div>
                    <div className="space-y-3">
                        <h1 className="font-bold md:font-semibold md:text-2xl text-xl text-primary">Celebrate Krishna Janmashtami with Vastraa: Dress to Impress and Embrace the Divine Spirit</h1>
                        <p className="text-base text-primary font-normal leading-[140%]">As we approach the divine celebration of Krishna’s birth, it’s the perfect time to infuse your festivities with an air of magic and tradition. At Vastraa, we specialize in turning every event into a memorable experience with our exceptional costumes and event services. This year, let us help you celebrate Krishna’s leela (divine play) in a way that’s as enchanting and vibrant as the festival itself.</p>
                    </div>

                    <div className="space-y-3">
                        <h3 className="font-bold md:font-semibold md:text-xl text-xl text-primary">Why Choose Vastraa for Krishna’s Celebration?</h3>
                        <p className="text-base text-primary font-normal leading-[140%]">Divinely Inspired Costumes: Our collection of Krishna-themed costumes is designed to capture the essence of this beloved deity. From the charming peacock-feathered crowns to the resplendent silk dhotis and vibrant, hand-embroidered kurtas, each piece is crafted with intricate attention to detail. Whether you're organizing a traditional puja, a grand procession, or a themed party, our costumes will add a touch of divine grace and splendor.</p>
                    </div>

                    <div className="space-y-3">
                        <h3 className="font-bold md:font-semibold md:text-xl text-xl text-primary">Cultural Performances and Entertainment:</h3>
                        <p className="text-base text-primary font-normal leading-[140%]">Elevate your event with traditional performances, including devotional dances and music that honor Krishna’s playful and loving nature. Our network of talented performers and entertainers can bring the joy of Krishna’s stories to life, ensuring a captivating experience for all attendees.</p>
                    </div>

                    <div className="space-y-3">
                        <h3 className="font-bold md:font-semibold md:text-xl text-xl text-primary">Custom Event Planning Services:</h3>
                        <p className="text-base text-primary font-normal leading-[140%]">From managing guest lists to coordinating schedules, our expert event planners handle every detail with precision and care. We work closely with you to tailor every aspect of your celebration, ensuring that it reflects the joy and significance of Krishna’s arrival.</p>
                    </div>

                    <div className="space-y-3">
                        <h3 className="font-bold md:font-semibold md:text-xl text-xl text-primary">Memorable Photography and Videography:</h3>
                        <p className="text-base text-primary font-normal leading-[140%]">Capture the beauty and excitement of your Krishna celebration with our professional photography and videography services. <br /> className="text-base text-primary font-normal leading-[140%]" Our team ensures that every moment, from the elegant costumes to the joyous rituals, is preserved in high-quality imagery.</p>
                    </div>

                    <div className="space-y-3">
                        <h3 className="font-bold md:font-semibold md:text-xl text-xl text-primary">How Vastraa Costumes & Events Makes a Difference:</h3>
                        <p className="text-base text-primary font-normal leading-[140%]">At Vastraa, we understand that each celebration is unique, and we pride ourselves on providing personalized service that reflects your vision and values. Our commitment to quality and creativity ensures that every detail of your Krishna celebration will be extraordinary.</p>
                    </div>

                    <div className="space-y-3">
                        <h3 className="font-bold md:font-semibold md:text-xl text-xl text-primary">Join Us in Celebrating Krishna’s Divine Leela</h3>
                        <p className="text-base text-primary font-normal leading-[140%]">As we prepare to honor Krishna, let Vastraa be your partner in creating a celebration that is as joyous and divine as the deity himself. Explore our collection of costumes, decorations, and event services to transform your festivities into an unforgettable experience. <br />
                            For more information and to start planning your extraordinary Krishna celebration with Vastraa, visit our website or contact our team today.</p>
                    </div>
                </div>

                <hr className="col-span-1 rotate-90" />

                <div className="col-span-4 md:space-y-20">
                    <div className="space-y-3">
                        <img src={blogimg2} alt="blogimg1" />
                        <p className="text-[#555555] font-normal text-sm">15th August, 2024</p>
                        <p className="text-[#555555] font-normal text-sm">Make Your Independence Day Celebration Unforgettable with Vastraa</p>
                    </div>
                    <div className="space-y-3">
                        <img src={blogimg3} alt="blogimg1" />
                        <p className="text-[#555555] font-normal text-sm">15th August, 2024</p>
                        <p className="text-[#555555] font-normal text-sm">Celebrate Ganesh Chaturthi in Style: Stunning Costumes and Dance Performances to Honor Lord Ganesha</p>
                    </div>
                    <div className="space-y-3">
                        <img src={blogimg4} alt="blogimg1" />
                        <p className="text-[#555555] font-normal text-sm">15th August, 2024</p>
                        <p className="text-[#555555] font-normal text-sm">Frightfully Fabulous: Transform Your Halloween Party with Vastraa’s Spooktacular Costumes and Decor</p>
                    </div>
                    <div className="space-y-3">
                        <img src={blogimg5} alt="blogimg1" />
                        <p className="text-[#555555] font-normal text-sm">15th August, 2024</p>
                        <p className="text-[#555555] font-normal text-sm">Spin into Joy: Elevate Your Garba Night with Vastraa’s Traditional Costumes and Dance Essentials</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Blogs