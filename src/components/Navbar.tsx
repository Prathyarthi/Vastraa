import { useState } from "react";
import vastraa_logo from "/logo.svg";
import { CgClose, CgMenuRight } from "react-icons/cg";
import { Link, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";

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
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          <a href="/">
            <img src={vastraa_logo} alt="Vastraa Logo" />
          </a>
        </motion.div>

        <motion.button
          className="relative md:hidden"
          onClick={handleClick}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          <AnimatePresence mode="wait">
            {isOpen ? (
              <motion.div
                key="close"
                initial={{ rotate: 0, opacity: 0 }}
                animate={{ rotate: 45, opacity: 1 }}
                exit={{ rotate: 0, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <CgClose className="text-[32px]" />
              </motion.div>
            ) : (
              <motion.div
                key="menu"
                initial={{ rotate: 45, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 45, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <CgMenuRight className="text-[32px]" />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.button>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              className="fixed right-0 w-full font-semibold md:hidden"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              <div className="absolute mt-5 flex h-48 w-full flex-col items-end text-end">
                <motion.div
                  className="flex flex-col space-y-4 rounded-lg bg-[#FBFFFE] p-[24px] font-semibold shadow-lg"
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.8, opacity: 0 }}
                  transition={{ duration: 0.2, delay: 0.1 }}
                >
                  {[
                    { href: "/", label: "Home", key: "/" },
                    { href: "/#costumes", label: "Costumes", key: "costumes" },
                    { href: "/#events", label: "Events", key: "events" },
                    {
                      href: "/#whyVastraa",
                      label: "Why Vastraa?",
                      key: "whyVastraa",
                    },
                    { href: "/blogs", label: "Blogs", key: "blogs" },
                    { href: "/#contact", label: "Contact", key: "contact" },
                  ].map((item, index) => (
                    <motion.div
                      key={item.key}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.2, delay: 0.1 + index * 0.05 }}
                      whileHover={{ x: -5 }}
                    >
                      {item.href.startsWith("/#") ? (
                        <Link
                          to={item.href}
                          onClick={() => handleLinkClick(item.key)}
                          className={`${linkClasses(item.key)} transition-colors duration-200`}
                        >
                          {item.label}
                        </Link>
                      ) : (
                        <a
                          href={item.href}
                          onClick={() => handleLinkClick(item.key)}
                          className={`${linkClasses(item.key)} transition-colors duration-200`}
                        >
                          {item.label}
                        </a>
                      )}
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="hidden space-x-6 font-normal md:block">
          {[
            { href: "/", label: "Home", key: "/" },
            { href: "/#costumes", label: "Costumes", key: "costumes" },
            { href: "/#events", label: "Events", key: "events" },
            { href: "/#whyVastraa", label: "Why Vastraa?", key: "whyVastraa" },
            { href: "/blogs", label: "Blogs", key: "blogs" },
            { href: "/#contact", label: "Contact", key: "contact" },
          ].map((item) => (
            <motion.span
              key={item.key}
              whileHover={{ y: -2 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              {item.href.startsWith("/#") ? (
                <Link
                  to={item.href}
                  onClick={() => handleLinkClick(item.key)}
                  className={`${linkClasses(item.key)} relative transition-all duration-200`}
                >
                  {item.label}
                  <motion.div
                    className="absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500"
                    initial={{ width: 0 }}
                    whileHover={{ width: "100%" }}
                    transition={{ duration: 0.3 }}
                  />
                </Link>
              ) : (
                <a
                  href={item.href}
                  onClick={() => handleLinkClick(item.key)}
                  className={`${linkClasses(item.key)} relative transition-all duration-200`}
                >
                  {item.label}
                  <motion.div
                    className="absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500"
                    initial={{ width: 0 }}
                    whileHover={{ width: "100%" }}
                    transition={{ duration: 0.3 }}
                  />
                </a>
              )}
            </motion.span>
          ))}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
