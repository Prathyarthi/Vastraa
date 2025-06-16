import { ChevronLeft, ChevronRight } from "react-feather";

function Clients() {
  return (
    <section className="h-[222px] w-full bg-[#FFEBF9] lg:relative">
      <div className="py-7 text-center text-2xl font-semibold">
        <h1 className="text-[#1B1B1E]">Our Valuable Clients</h1>
      </div>
      <div className="hidden lg:absolute lg:inset-0 lg:flex lg:justify-between lg:px-16">
        <button className="">
          <ChevronLeft size={40} />
        </button>
        <button className="z-10">
          <ChevronRight size={40} />
        </button>
      </div>

      <div className="group flex overflow-hidden lg:mx-[120px] lg:space-x-8">
        <div className="flex w-full animate-scroll space-x-8 group-hover:paused lg:items-center lg:justify-center lg:space-x-8">
          <ul className="flex h-[48px] w-[174px] items-center space-x-2 rounded-lg bg-[#F9F8F8] p-5 text-xl font-semibold text-[#3D3D3D] lg:justify-center">
            <li>Valley</li>
            <li className="text-[#00AC47]">School</li>
          </ul>
          <ul className="flex h-[48px] items-center whitespace-nowrap rounded-lg bg-[#F9F8F8] p-5 text-xl font-semibold text-[#2867B2] lg:min-w-[174px] lg:justify-center">
            Brigade School
          </ul>
          <ul className="flex h-[48px] items-center whitespace-nowrap rounded-lg bg-[#F9F8F8] p-5 text-xl font-semibold text-[#3D3D3D] lg:min-w-[174px] lg:justify-center">
            SGI Kolhapur
          </ul>
          <ul className="flex h-[48px] items-center whitespace-nowrap rounded-lg bg-[#1769FF] p-5 text-xl font-semibold text-[#FFCC33] lg:min-w-[174px] lg:justify-center">
            Euro Schools
          </ul>
          <ul className="flex h-[48px] items-center whitespace-nowrap rounded-lg bg-[#FFCC33] p-5 text-xl font-semibold text-[#3D3D3D] lg:min-w-[174px] lg:justify-center">
            NGF KIDS
          </ul>
        </div>
        <div className="hidden w-full animate-scroll space-x-8 group-hover:paused sm:flex lg:items-center lg:justify-center lg:space-x-8">
          <ul className="flex h-[48px] items-center space-x-2 rounded-lg bg-[#F9F8F8] p-5 text-xl font-semibold text-[#3D3D3D] lg:min-w-[174px] lg:justify-center">
            <li>Valley</li>
            <li className="text-[#00AC47]">School</li>
          </ul>
          <ul className="flex h-[48px] items-center whitespace-nowrap rounded-lg bg-[#F9F8F8] p-5 text-xl font-semibold text-[#2867B2] lg:min-w-[174px] lg:justify-center">
            Brigade School
          </ul>
          <ul className="flex h-[48px] items-center whitespace-nowrap rounded-lg bg-[#F9F8F8] p-5 text-xl font-semibold text-[#3D3D3D] lg:min-w-[174px] lg:justify-center">
            SGI Kolhapur
          </ul>
          <ul className="flex h-[48px] items-center whitespace-nowrap rounded-lg bg-[#1769FF] p-5 text-xl font-semibold text-[#FFCC33] lg:min-w-[174px] lg:justify-center">
            Euro Schools
          </ul>
          <ul className="flex h-[48px] items-center whitespace-nowrap rounded-lg bg-[#FFCC33] p-5 text-xl font-semibold text-[#3D3D3D] lg:min-w-[174px] lg:justify-center">
            NGF KIDS
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Clients;
