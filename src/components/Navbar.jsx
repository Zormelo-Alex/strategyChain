import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { IoMenu, IoClose } from "react-icons/io5";
import Button from "./Button";

const Navbar = () => {
  const [hasShadow, setHasShadow] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setHasShadow(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <>
      {/* Navbar */}
      <motion.div
        initial={{ opacity: 0, y: -10, scale: 0.9, rotateX: -15 }}
        animate={{ opacity: 1, y: 0, scale: 1, rotateX: 0 }}
        transition={{ type: "spring", stiffness: 100, damping: 12 }}
        className={`font-man fixed z-50 flex items-center justify-between text-white py-4 transition-all duration-[1000ms] origin-center w-full px-8 ${
          hasShadow
            ? "glass rounded-[10px] w-[90%]! md:max-w-[815px] left-1/2 transform -translate-x-1/2 top-4"
            : "bg-transparent left-1/2 transform -translate-x-1/2 top-0 border-none"
        }`}
      >
        <a
          href="#"
          className="text-[20px] tracking-wide flex gap-2 items-center"
        >
          <img
            src="/logo.png"
            alt=""
            className="h-[30px] w-[30px] object-cover"
          />
          Strategy.Chain
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex gap-6">
          {["Product", "Agent Explorer", "Resources", "Find Us"].map(
            (name, index) => (
              <motion.a
                key={index}
                href="#"
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="text-[14px] cursor-pointer"
              >
                {name}
              </motion.a>
            )
          )}
        </div>

        {/* Deploy Agent Button - Hidden on Mobile */}
        <div className="hidden md:block">
          <Button className="px-6 py-3">
            Deploy Agent
          </Button>
        </div>

        {/* Hamburger Icon for Mobile */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-white text-2xl focus:outline-none"
        >
          <IoMenu />
        </button>
      </motion.div>

      {/* Mobile Slide-in Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 100, damping: 15 }}
            className="fixed top-0 right-0 h-full w-[70%] sm:w-[50%] bg-black/90 text-white flex flex-col items-center justify-center space-y-6 z-50"
          >
            {/* Close Button */}
            <button
              onClick={toggleMenu}
              className="absolute top-6 right-6 text-2xl"
            >
              <IoClose />
            </button>

            {["Product", "Agent Explorer", "Resources", "Find Us"].map(
              (name, index) => (
                <motion.a
                  key={index}
                  href="#"
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="text-lg"
                >
                  {name}
                </motion.a>
              )
            )}

            {/* Deploy Agent Button for Mobile */}
            <Button className="border border-[#ffffff0d] px-6 py-3 bg-[#0f0f0f43]">
              Deploy Agent
            </Button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
