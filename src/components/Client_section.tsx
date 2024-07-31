import { ChevronLeft, ChevronRight } from "react-feather"

function Client_section() {
    return (
        <section className="lg:w-full lg:h-[60vh] flex-col mt-16 lg:mt-0 lg:relative">
            <div className="w-full mt-20">
                <div className="flex justify-center flex-col text-center space-y-2">
                    <h1 className="text-primary font-semibold text-3xl">Our Clients</h1>
                    <p className="text-primary font-normal">Our clients are at the heart of everything we do. We pride ourselves on delivering personalized, top-notch service to meet their unique needs.
                        From individuals to organizations, our commitment to excellence ensures their events are truly unforgettable.</p>
                </div>
            </div>

            <div className="hidden lg:absolute lg:inset-0 lg:flex lg:justify-between lg:px-16">
                <button className="">
                    <ChevronLeft size={40} />
                </button>
                <button className="z-10">
                    <ChevronRight size={40} />
                </button>
            </div>

            <div className="flex overflow-hidden lg:space-x-8 group lg:mx-[80px]">
                <div className="flex lg:space-x-8 space-x-8 w-full lg:justify-center lg:items-center animate-scroll group-hover:paused">
                    <ul className="text-xl font-semibold flex items-center lg:justify-center bg-[#F9F8F8] text-[#3D3D3D] h-[48px] w-[174px] rounded-lg p-5 space-x-2">
                        <li>Valley</li>
                        <li className="text-[#00AC47]">School</li>
                    </ul>
                    <ul className="text-xl font-semibold flex items-center lg:justify-center bg-[#F9F8F8] text-[#2867B2] h-[48px] lg:min-w-[174px] rounded-lg p-5 whitespace-nowrap">Brigade School</ul>
                    <ul className="text-xl font-semibold flex items-center lg:justify-center bg-[#F9F8F8] text-[#3D3D3D] h-[48px] lg:min-w-[174px] rounded-lg p-5 whitespace-nowrap">SGI Kolhapur</ul>
                    <ul className="text-xl font-semibold flex items-center lg:justify-center bg-[#1769FF] text-[#FFCC33] h-[48px] lg:min-w-[174px] rounded-lg p-5 whitespace-nowrap">Euro Schools</ul>
                    <ul className="text-xl h-[48px] lg:min-w-[174px] font-semibold flex items-center lg:justify-center bg-[#FFCC33] text-[#3D3D3D] rounded-lg p-5 whitespace-nowrap">NGF KIDS</ul>
                </div>
                <div className="hidden sm:flex lg:space-x-8 space-x-8 w-full lg:justify-center lg:items-center animate-scroll group-hover:paused">
                    <ul className="text-xl font-semibold flex items-center lg:justify-center bg-[#F9F8F8] text-[#3D3D3D] h-[48px] lg:min-w-[174px] rounded-lg p-5 space-x-2">
                        <li>Valley</li>
                        <li className="text-[#00AC47]">School</li>
                    </ul>
                    <ul className="text-xl font-semibold flex items-center lg:justify-center bg-[#F9F8F8] text-[#2867B2] h-[48px] lg:min-w-[174px] rounded-lg p-5 whitespace-nowrap">Brigade School</ul>
                    <ul className="text-xl font-semibold flex items-center lg:justify-center bg-[#F9F8F8] text-[#3D3D3D] h-[48px] lg:min-w-[174px] rounded-lg p-5 whitespace-nowrap">SGI Kolhapur</ul>
                    <ul className="text-xl font-semibold flex items-center lg:justify-center bg-[#1769FF] text-[#FFCC33] h-[48px] lg:min-w-[174px] rounded-lg p-5 whitespace-nowrap">Euro Schools</ul>
                    <ul className="text-xl h-[48px] lg:min-w-[174px] font-semibold flex items-center lg:justify-center bg-[#FFCC33] text-[#3D3D3D]  rounded-lg p-5 whitespace-nowrap">NGF KIDS</ul>
                </div>
            </div>
        </section>
    )
}

export default Client_section