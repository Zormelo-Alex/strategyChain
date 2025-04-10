import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { toast } from "react-toastify";



const Topbar = () => {
  const [isMenuOpen, setisMenuOpen] = useState(false);

  const handleCloseMenu = (e) => {
    if (e.target === e.currentTarget) {
      setisMenuOpen(false);
    }
  };

  const links = [
    { name: "Product", url: "#" },
    { name: "Service", url: "#" },
    { name: "Integrations", url: "#" },
    { name: "Connect Networks", url: "#" },
    { name: "How it Works", url: "#" },
    { name: "FAQ", url: "#" },
  ];

  return (
    <div className="py-3 px-12 shadow">
      <div className="flex justify-between items-center">
        <div className="flex gap-7">
          {links.map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Link
                to={item.url}
                className="text-[14px] font-man hover:text-[#1485DB] transition-colors duration-200"
              >
                {item.name}
              </Link>
            </motion.div>
          ))}
        </div>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 300 }}
          className="bg-[#1485DB] text-white text-[14px] py-[10px] px-[18px] rounded-[10px] hover:bg-[#0e6fbf] transition-colors duration-200 cursor-pointer"
        >
          Connect Wallet
        </motion.button>
      </div>
    </div>
  );
};

export default Topbar;
