import { useState } from "react";
import vastraa_logo from "/logo.svg";
import { CgClose, CgMenuRight } from "react-icons/cg";
import { Link, useNavigate } from "react-router-dom";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("");

  const navigate = useNavigate();

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  const handleLinkClick = (link: string) => {
    setActiveLink(link);
    setIsOpen(false);

    if (link === "blogs") {
      navigate("/blogs");
    } else {
      navigate("/");
      setTimeout(() => {
        const element = document.getElementById(link);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    }
  };

  const linkClasses = (link: string) =>
    link === activeLink ? "text-gradient" : "hover:text-gradient";

  return (
    <nav className="sticky top-0 z-20 border-b bg-[#FBFFFE] px-4 font-madeTommy md:px-[150px] lg:ml-0 lg:mr-0">
      <div className="flex w-full items-center justify-between py-3">
        <div>
          <a href="/">
            <img src={vastraa_logo} alt="Vastraa Logo" />
          </a>
        </div>

        <button className="relative md:hidden" onClick={handleClick}>
          {isOpen ? (
            <CgClose className="text-[32px]" />
          ) : (
            <CgMenuRight className="text-[32px]" />
          )}
        </button>

        {isOpen ? (
          <>
            <div className="fixed right-0 w-full font-semibold md:hidden">
              <div className="absolute mt-5 flex h-48 w-full flex-col items-end text-end">
                <div className="flex flex-col space-y-4 rounded-lg bg-[#FBFFFE] p-[24px] font-semibold">
                  <a
                    href="/"
                    onClick={() => handleLinkClick("/")}
                    className={linkClasses("/")}
                  >
                    Home
                  </a>
                  <Link
                    to="/#costumes"
                    onClick={() => handleLinkClick("costumes")}
                    className={linkClasses("costumes")}
                  >
                    Costumes
                  </Link>
                  <Link
                    to="/#events"
                    onClick={() => handleLinkClick("events")}
                    className={linkClasses("events")}
                  >
                    Events
                  </Link>
                  <Link
                    to="/#whyVastraa"
                    onClick={() => handleLinkClick("whyVastraa")}
                    className={linkClasses("whyVastraa")}
                  >
                    Why Vastraa?
                  </Link>
                  <Link
                    to="/blogs"
                    onClick={() => handleLinkClick("blogs")}
                    className={linkClasses("blogs")}
                  >
                    Blogs
                  </Link>
                  <Link
                    to="/#contact"
                    onClick={() => handleLinkClick("contact")}
                    className={linkClasses("contact")}
                  >
                    Contact
                  </Link>
                </div>
              </div>
            </div>
          </>
        ) : (
          <div className="hidden space-x-6 font-normal md:block">
            <a
              href="/"
              onClick={() => handleLinkClick("/")}
              className={linkClasses("/")}
            >
              Home
            </a>
            <Link
              to="/#costumes"
              onClick={() => handleLinkClick("costumes")}
              className={linkClasses("costumes")}
            >
              Costumes
            </Link>
            <Link
              to="/#events"
              onClick={() => handleLinkClick("events")}
              className={linkClasses("events")}
            >
              Events
            </Link>
            <Link
              to="/#whyVastraa"
              onClick={() => handleLinkClick("whyVastraa")}
              className={linkClasses("whyVastraa")}
            >
              Why Vastraa?
            </Link>
            <Link
              to="/blogs"
              onClick={() => handleLinkClick("blogs")}
              className={linkClasses("blogs")}
            >
              Blogs
            </Link>
            <Link
              to="/#contact"
              onClick={() => handleLinkClick("contact")}
              className={linkClasses("contact")}
            >
              Contact
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
