import { ReactElement } from "react"


function FeatureCard({ icon, title, description }: {
    icon: ReactElement
    title: string,
    description: string
}) {
    return (
        <div className="lg:h-[230px] lg:w-[240px] flex flex-col border rounded-[16px] lg:space-y-4 p-3 bg-[#FBFFFE] shadow-lg">
            <div className="text-gradient">{icon}</div>
            <h1 className="font-semibold text-primary">{title}</h1>
            <p className="font-normal text-primary">{description}</p>
        </div>
    )
}

export default FeatureCard