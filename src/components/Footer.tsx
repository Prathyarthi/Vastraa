import { MapPin } from "lucide-react";
import vastraaLogo from "../assets/footer_logo.png";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <section id="contact" className="md:pt-40 pt-24">
      <div className="bg-primary md:px-[150px] pt-5 px-[16px] pb-10 text-[#FBFFFE] lg:h-[400px] lg:place-content-center">
        <div className="lg:flex space-y-8 lg:space-y-0 justify-between">
          <div className="hidden md:block col-span-4">
            <img
              src={vastraaLogo}
              alt="vastraa_logo"
              className="lg:w-[130px] w-[100px]"
            />

            <div className="pt-5">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d308.6555004909462!2d77.58361858441181!3d12.933331278119814!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae15b504aca34b%3A0x19c69ea8046898c!2sVastraa%20Costumes%20Jayanagar!5e1!3m2!1sen!2sin!4v1727372412427!5m2!1sen!2sin"
                width="150"
                height="150"
                style={{ border: "0" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Vastraa"
              ></iframe>
            </div>
          </div>
          <div className="lg:flex lg:space-x-20 space-y-8 lg:space-y-0">
            <div className="lg:flex flex-col items-center space-y-2 hidden">
              <a
                href="https://www.facebook.com/vastraacostumes"
                target="_blank"
              >
                <img className="w-[50px]" src="/facebook.svg" alt="facebook" />
              </a>
              <a
                href="https://www.instagram.com/vastraacostumes/"
                target="_blank"
              >
                <img
                  className="w-[50px]"
                  src="/instagram.svg"
                  alt="instagram"
                />
              </a>
              <a href="" target="_blank">
                <img className="w-[50px]" src="/linkedIn.svg" alt="linkedIn" />
              </a>
            </div>
            <div className="md:flex space-x-20 hidden col-span-2">
              <div className="lg:flex lg:flex-col lg:space-y-7">
                <a href="#costumes">
                  <p className="hover:text-gradient">Costumes</p>
                </a>
                <a href="#events">
                  <p className="hover:text-gradient">Event Management</p>
                </a>
                <a href="#whyVastraa">
                  <p className="hover:text-gradient">Why Vastraa?</p>
                </a>
                <a href="#team">
                  <p className="hover:text-gradient">Team</p>
                </a>
                <Link to="/blogs" onClick={() => window.scrollTo(0, 0)}>
                  <p className="hover:text-gradient">Blogs</p>
                </Link>
              </div>
            </div>
            <div className="flex flex-col space-y-5 col-span-3">
              <div className="flex space-x-2 items-center">
                {<MapPin className="text-[#00AC47]" />}
                <h2 className="text-[#FFFFFF] md:font-semibold font-bold lg:text-2xl">
                  Jayanagar
                </h2>
              </div>
              <p className="text-[14px]">
                #69, 9th Main Rd,
                <br /> Jayanagar 3rd Block East,
                <br /> Bengaluru, Karnataka <br />
                560011
              </p>
              <div>
                <p className="font-bold flex flex-col text-[14px]">
                  +91-9986178988
                </p>
                <a href="" className="cursor-pointer">
                  vastraaevents@gmail.com
                </a>
              </div>
            </div>
            <div className="flex flex-col space-y-5 col-span-3">
              <div className="flex space-x-2 items-center">
                {<MapPin className="text-[#00AC47]" />}
                <h2 className="text-[#FFFFFF] md:font-semibold font-bold lg:text-2xl">
                  Whitefiled
                </h2>
              </div>
              <p className="text-[14px]">
                No A/2, Inner Cir Rd,
                <br /> Whitefield, Dodsworth Layout,
                <br /> Bengaluru, Karnataka
                <br /> 560066
              </p>
              <div>
                <p className="flex flex-col font-bold text-[14px]">
                  +91-9986178988
                </p>
                <a href="" className="cursor-pointer">
                  vastraaevents@gmail.com
                </a>
              </div>

              <div className="flex space-x-3 md:hidden">
                <a
                  href="https://www.facebook.com/vastraacostumes"
                  target="_blank"
                >
                  <img
                    className="w-[50px]"
                    src="/facebook.svg"
                    alt="facebook"
                  />
                </a>
                <a
                  href="https://www.instagram.com/vastraacostumes/"
                  target="_blank"
                >
                  <img
                    className="w-[50px]"
                    src="/instagram.svg"
                    alt="instagram"
                  />
                </a>
                <a href="" target="_blank">
                  <img className="w-[50px]" src="/linkedIn.svg" alt="" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Footer;
