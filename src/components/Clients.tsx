import { ChevronLeft, ChevronRight } from "react-feather"

function Clients() {

    return (
        <section className="bg-[#FFEBF9] h-[222px] w-full lg:relative">
            <div className="text-center py-7 font-semibold text-2xl">
                <h1 className="text-[#1B1B1E]">Our Valuable Clients</h1>
            </div>
            <div className="hidden lg:absolute lg:inset-0 lg:flex lg:items-center lg:justify-between lg:px-10">
                <button className="z-10">
                    <ChevronLeft size={40} />
                </button>
                <button className="z-10">
                    <ChevronRight size={40} />
                </button>
            </div>

            <div className="flex overflow-hidden lg:space-x-8 group lg:mx-[100px]">
                <div className="flex space-x-8 w-full lg:justify-center lg:items-center animate-scroll group-hover:paused">
                    <ul className="text-xl font-semibold flex items-center lg:justify-center bg-[#F9F8F8] text-[#3D3D3D] h-[48px] w-[174px] rounded-lg p-5 space-x-2">
                        <li>Valley</li>
                        <li className="text-[#00AC47]">School</li>
                    </ul>
                    <ul className="text-xl font-semibold flex items-center lg:justify-center bg-[#F9F8F8] text-[#2867B2] h-[48px] w-[174px] rounded-lg p-5 whitespace-nowrap">Brigade School</ul>
                    <ul className="text-xl font-semibold flex items-center lg:justify-center bg-[#F9F8F8] text-[#3D3D3D] h-[48px] w-[174px] rounded-lg p-5">SGI Kolhapur</ul>
                    <ul className="text-xl font-semibold flex items-center lg:justify-center bg-[#1769FF] text-[#FFCC33] h-[48px] w-[174px] rounded-lg p-5">Euro Schools</ul>
                    <ul className="text-xl w-[174px] font-semibold flex lg:items-center lg:justify-center bg-[#FFCC33] text-[#3D3D3D] h-[48px] rounded-lg p-5">NGF KIDS</ul>
                </div>
                <div className="flex space-x-8 w-full lg:justify-center lg:items-center animate-scroll group-hover:paused">
                    <ul className="text-xl font-semibold flex items-center lg:justify-center bg-[#F9F8F8] text-[#3D3D3D] h-[48px] w-[174px] rounded-lg p-5 space-x-2">
                        <li>Valley</li>
                        <li className="text-[#00AC47]">School</li>
                    </ul>
                    <ul className="text-xl font-semibold flex items-center lg:justify-center bg-[#F9F8F8] text-[#2867B2] h-[48px] w-[174px] rounded-lg p-5 whitespace-nowrap">Brigade School</ul>
                    <ul className="text-xl font-semibold flex items-center lg:justify-center bg-[#F9F8F8] text-[#3D3D3D] h-[48px] w-[174px] rounded-lg p-5">SGI Kolhapur</ul>
                    <ul className="text-xl font-semibold flex items-center lg:justify-center bg-[#1769FF] text-[#FFCC33] h-[48px] w-[174px] rounded-lg p-5">Euro Schools</ul>
                    <ul className="text-xl w-[174px] font-semibold flex lg:items-center lg:justify-center bg-[#FFCC33] text-[#3D3D3D] h-[48px] rounded-lg p-5">NGF KIDS</ul>
                </div>
            </div>
        </section>
    )
}

export default Clients

