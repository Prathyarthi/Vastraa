import img1 from "../assets/logo-1-3@1x.png";
import img2 from "../assets/cropped-vydehi_logo1@1x.png";
import img3 from "../assets/_image@1x.png";
import img4 from "../assets/wf-logo-150x150@1x.png";
import img5 from "../assets/Sanjay-Ghodawat-International-School-3-e1689178667639@1x.png";
import img6 from "../assets/snis-logo1@1x.png";
import img7 from "../assets/logo.png@1x.png";
import img8 from "../assets/logo@1x.png";

const pics = [
  {
    id: 1,
    image: img1,
  },
  {
    id: 2,
    image: img2,
  },
  {
    id: 3,
    image: img3,
  },
  {
    id: 4,
    image: img4,
  },
  {
    id: 5,
    image: img5,
  },
  {
    id: 6,
    image: img6,
  },
  {
    id: 7,
    image: img7,
  },
  {
    id: 8,
    image: img8,
  },
];

function Scroll_Client() {
  return (
    <div className="w-full flex overflow-hidden group mt-10">
      <div className="flex lg:space-x-8 space-x-8 w-full lg:justify-center lg:items-center animate-scroll group-hover:paused gap-x-8">
        {pics.map((pic) => (
          <img src={pic.image} alt="img" />
        ))}
      </div>
    </div>
  );
}

export default Scroll_Client;
