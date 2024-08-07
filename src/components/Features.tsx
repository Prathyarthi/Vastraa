import { BadgePercent, Shapes, Sparkles, Star } from "lucide-react"
import FeatureCard from "./FeatureCard"


const features = [
    {
        icon: <BadgePercent />,
        title: "Cost Effective",
        description: "Vastraa offers premium costumes for rent at affordable prices, providing high value without compromising on quality."
    },
    {
        icon: <Sparkles />,
        title: "Easy Rentals",
        description: "Experience a seamless and straightforward rental process with Vastraa, making it easy to get the costume you need."
    },
    {
        icon: <Star />,
        title: "Selection",
        description: "Vastraa provides a curated collection of top-quality costumes, ensuring the ideal choice for every special event and occasion."
    },
    {
        icon: <Shapes />,
        title: "Collections",
        description: "Vastraa's extensive costume selection caters to diverse themes and events, offering something perfect for every unique requirement."
    },
]

function Features() {
    return (
        <section id="whyVastraa" className="min-h-screen pt-40">
            <div className="">
                <div className="flex space-x-4">
                    <div className="bg-gradient lg:h-[110px] lg:min-w-[8px] min-w-[8px] border rounded-full h-48"></div>
                    <div className="flex flex-col">
                        <div className="space-y-4">
                            <h1 className="text-[#1B1B1E] font-medium text-4xl text-primary">Why Vastraa?</h1>
                            <p className="text-[#1B1B1E] font-normal">Vastraa is more than just a costume provider; we are your partners in creating unforgettable experiences. <br /> Our extensive collection and personalized service ensure you find the perfect attire for any event.</p>
                        </div>
                    </div>
                </div>
                <div className="lg:flex lg:justify-between items-center space-y-5 lg:space-y-0 mt-12">
                    {features.map((feature) => (
                        <FeatureCard key={feature.title} icon={feature.icon} title={feature.title} description={feature.description} />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Features