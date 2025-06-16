import bride_groom from "../assets/fashionSectionImages/Bridal & Groom@1x.png";
import blazer from "../assets/fashionSectionImages/blazers & suit@1x.png";
import maternity from "../assets/fashionSectionImages/Maternity@1x.png";
import graduation from "../assets/fashionSectionImages/Graduation@1x.png";
import prewedding from "../assets/fashionSectionImages/Prewedding@1x.png";
import jewellery from "../assets/fashionSectionImages/Jewellery set@1x.png";
import CarouselComponent from "../components/CarouselComponent";

const pics = [
  {
    id: 1,
    image: bride_groom,
  },
  {
    id: 2,
    image: blazer,
  },
  {
    id: 3,
    image: maternity,
  },
  {
    id: 4,
    image: graduation,
  },
  {
    id: 5,
    image: prewedding,
  },
  {
    id: 6,
    image: jewellery,
  },
];
function Fashion() {
  return (
    <section className="min-h-[80vh] pt-24 md:pt-40">
      <div className="flex space-x-6">
        <div className="min-w-[8px] rounded-full border bg-gradient lg:h-[110px] lg:min-w-[8px]"></div>
        <div className="space-y-4">
          <h1 className="text-3xl font-bold text-primary md:text-4xl md:font-semibold">
            Fashion, <span className="text-gradient">Maternity, </span>{" "}
            Pre-Wedding,{" "}
            <span className="text-gradient">Bridal Collections</span> & More!
          </h1>
          <p className="text-base font-normal leading-[140%] text-primary">
            Explore our extensive collection of costumes, including fashion,
            maternity, pre-wedding, and bridal wear. <br /> Find the perfect
            attire for every special occasion in one place.
          </p>
        </div>
      </div>
      <div className="mt-[30px] flex flex-col px-5 lg:grid lg:grid-cols-2 lg:justify-between lg:p-0">
        <div className="">
          <CarouselComponent images={pics} />
        </div>

        <div className="mt-[30px] flex lg:ml-10">
          <ul className="list-disc space-y-4 text-base font-normal text-primary marker:text-gradient lg:ml-10">
            <li>
              <span className="text-gradient">Fashion Show Outfits:</span>{" "}
              Stylish and trendy outfits for the runway.
            </li>
            <li>
              <span className="text-gradient">Graduation Gowns:</span> Elegant
              gowns for your big day.
            </li>
            <li>
              <span className="text-gradient">Pre-Wedding Gowns:</span>{" "}
              Beautiful gowns for pre-wedding celebrations.
            </li>
            <li>
              <span className="text-gradient">Groom & Bridal Wear:</span>{" "}
              Stunning attire for the bride and groom.
            </li>
            <li>
              <span className="text-gradient">Jewelleries:</span> Exquisite
              pieces to complement any outfit.
            </li>
            <li>
              <span className="text-gradient">Blazers & Suits:</span> Classic
              and refined blazers & suits.
            </li>
            <li>
              <span className="text-gradient">Lehengas:</span> Gorgeous
              traditional attire.
            </li>
            <h2 className="-ml-4">
              Our expert team ensures a seamless and spectacular experience,
              turning your vision into reality and creating lasting memories.
            </h2>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Fashion;
