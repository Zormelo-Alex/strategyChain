import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const Navbar = () => {
  const [hasShadow, setHasShadow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setHasShadow(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: -10, scale: 0.9, rotateX: -15 }} // More dynamic start
      animate={{ opacity: 1, y: 0, scale: 1, rotateX: 0 }} // Smooth into place
      transition={{ type: "spring", stiffness: 100, damping: 12 }} // More natural movement
      className={`font-man fixed z-50 flex items-center justify-between text-white py-4 transition-all duration-[200ms] ${
        hasShadow
          ? "glass max-w-[815px] w-full left-1/2 transform -translate-x-1/2 top-4 px-4"
          : "bg-transparent w-full top-0 left-0 right-0 px-8"
      }`}
    >
      <a href="#" className="text-[20px] tracking-wide flex gap-2 items-center">
        <img
          src="/logo.png"
          alt=""
          className="h-[30px] w-[30px] object-cover"
        />
        Strategy.Chain
      </a>
      <div className="flex gap-6">
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

      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="text-[14px] relative overflow-hidden px-6 py-3 text-white text-lg font-[500] rounded-[8px] bg-[#0F0F0F] transition-all duration-300"
      >
        <span className="relative z-10">Deploy Agent</span>
        <span className="absolute inset-0 border-[1px] border-transparent rounded-[8px] animate-glow"></span>
      </motion.button>
     
    </motion.div>
  );
};

export default Navbar;
