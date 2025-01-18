import img13 from "../assets/newcostumes/Frame 181@1x.png";
import img14 from "../assets/newcostumes/Frame 182@1x.png";
import img15 from "../assets/newcostumes/Frame 183@1x.png";
import img16 from "../assets/newcostumes/Frame 184@1x.png";
import img17 from "../assets/newcostumes/Frame 185@1x.png";
import img18 from "../assets/newcostumes/Frame 186@1x.png";
import img20 from "../assets/newcostumes/Frame 188@1x.png";
import img22 from "../assets/newcostumes/Frame 190@1x.png";
import Card from "./Card";

const costumes = [
  {
    id: 12,
    image: img13,
  },
  {
    id: 13,
    image: img14,
  },
  {
    id: 14,
    image: img15,
  },
  {
    id: 15,
    image: img16,
  },
  {
    id: 16,
    image: img17,
  },
  {
    id: 17,
    image: img18,
  },
  {
    id: 19,
    image: img20,
  },
  {
    id: 21,
    image: img22,
  },
];

function Costume() {
  return (
    <section id="costumes" className="min-h-screen md:pt-40 pt-24 md:mt-12">
      <div className="flex space-x-6">
        <div className="bg-gradient lg:h-[104px] lg:min-w-[8px] min-w-[8px] border rounded-full"></div>
        <div className="space-y-4">
          <h1 className="font-bold flex gap-2 md:font-semibold md:text-4xl text-3xl text-primary">
            Cool <p className="text-gradient">Costume</p> Collection!
          </h1>
          <p className="text-base text-primary font-normal leading-[140%]">
            Our clients are at the heart of everything we do. We pride ourselves
            on delivering personalized, top-notch service to meet their unique
            needs. <br />
            From individuals to organizations, our commitment to excellence
            ensures their events are truly unforgettable.
          </p>
        </div>
      </div>

      <div className="lg:grid lg:grid-cols-3 grid grid-cols-1 mt-12 md:gap-6 mb-10">
        {costumes.map((costume) => (
          <Card key={costume.id} image={costume.image} />
        ))}
      </div>
      <p className="text-primary font-normal text-2xl">
        Discover a wide variety of styles,{" "}
        <span className="text-gradient">
          from classic to contemporary,
          <br />{" "}
        </span>
        ensuring the perfect fit for your event!!!
      </p>
    </section>
  );
}

export default Costume;
