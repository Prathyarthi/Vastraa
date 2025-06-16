import { MapPin } from "lucide-react";
import vastraaLogo from "../assets/footer_logo.png";
import { Link } from "react-router-dom";

function Footer() {
  const date = new Date();

  return (
    <section id="contact" className="pt-24 md:pt-40">
      <div className="bg-primary px-[16px] text-[#FBFFFE] md:px-[150px] lg:h-[400px] lg:place-content-center">
        <div className="justify-between space-y-8 lg:flex lg:space-y-0">
          <div className="col-span-4 hidden md:block">
            <img
              src={vastraaLogo}
              alt="vastraa_logo"
              className="w-[100px] lg:w-[130px]"
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
          <div className="space-y-8 lg:flex lg:space-x-20 lg:space-y-0">
            <div className="hidden flex-col items-center space-y-2 lg:flex">
              <a
                href="https://www.facebook.com/vastraacostumes/"
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
            <div className="col-span-2 hidden space-x-20 md:flex">
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
            <div className="col-span-3 flex flex-col space-y-5">
              <div className="flex items-center space-x-2">
                {<MapPin className="text-[#00AC47]" />}
                <h2 className="font-bold text-[#FFFFFF] md:font-semibold lg:text-2xl">
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
                <p className="flex flex-col text-[14px] font-bold">
                  +91-9986178988
                </p>
                <a href="" className="cursor-pointer">
                  vastraaevents@gmail.com
                </a>
              </div>
            </div>
            <div className="col-span-3 flex flex-col space-y-5">
              <div className="flex items-center space-x-2">
                {<MapPin className="text-[#00AC47]" />}
                <h2 className="font-bold text-[#FFFFFF] md:font-semibold lg:text-2xl">
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
                <p className="flex flex-col text-[14px] font-bold">
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
      <div className="bottom-0 w-full bg-primary p-5 text-center">
        <p className="text-sm text-secondary">
          Copyright © {date.getFullYear()} Vastraa Costumes and Events. All
          rights reserved.
        </p>
      </div>
    </section>
  );
}

export default Footer;
