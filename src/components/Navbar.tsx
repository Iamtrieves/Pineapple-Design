import Logo from "../assets/images/Logo";
import HamburgerMenu from "./HamburgerMenu";
// import { useEffect, useState } from "react";
// import { motion } from "framer-motion";
import { JSX } from "react";

const Navbar = (): JSX.Element => {
  // const [isFixed, setIsFixed] = useState(false);
  // const [lastScrollY, setLastScrollY] = useState(0);

  // useEffect(() => {
  //   const handleScroll = () => {
  //     const currentScrollY = window.scrollY;

  //     if (currentScrollY > lastScrollY) {
  //       // Scrolling Down: Remove Fixed Navbar
  //       setIsFixed(false);
  //     } else if (currentScrollY < lastScrollY && currentScrollY > 50) {
  //       // Scrolling Up: Make Navbar Fixed (but not at the very top)
  //       setIsFixed(true);
  //     }

  //     setLastScrollY(currentScrollY);
  //   };

  //   window.addEventListener("scroll", handleScroll);
  //   return () => window.removeEventListener("scroll", handleScroll);
  // }, [lastScrollY]);

  return (
    <div
      className="
      transition-all duration-300 lg:mx-[2.3rem] mx-[1.5rem] border-b-[0.8px]
     border-[#282828] pt-[1.6rem] lg:pt-[1.5rem]"
    >
      {/* <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.4, ease: "easeOut" }} */}
      <nav
        className={`flex justify-between items-center pb-[1.3rem] "fixed top-0 left-0 bg-white" w-full "pt-[1.3rem]" shadow-md relative bg-black"
        }`}
      >
        <div className="lg:block hidden">
          <h4
            className={`text-[#FFFFFF99] text-[.8rem] font-medium "text-black"
            } leading-4.5`}
          >
            UX UI Agency
          </h4>
        </div>
        <div>
          <Logo />
        </div>
        <div>
          <HamburgerMenu />
        </div>
        {/* </motion.nav> */}
      </nav>
    </div>
  );
};

export default Navbar;
