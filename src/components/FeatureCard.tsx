import { ReactElement } from "react"


function FeatureCard({ icon, title, description }: {
    icon: ReactElement
    title: string,
    description: string
}) {
    return (
        <div className="md:h-[250px] md:w-auto flex flex-col border rounded-[16px] lg:space-y-4 lg:py-[8px] py-[16px] px-5 justify-center bg-[#FBFFFE] shadow-lg">
            <div className="flex space-x-3 mb-3 lg:flex-col lg:space-x-0 lg:mb-0 lg:space-y-3">
                <div className="text-gradient">{icon}</div>
                <h1 className="font-bold md:font-semibold text-primary">{title}</h1>
            </div>
            <p className="font-normal text-primary">{description}</p>
        </div>
    )
}

export default FeatureCard