import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { GoSidebarCollapse } from "react-icons/go";
import { IoMenu, IoClose } from "react-icons/io5";
import { useAccount } from "wagmi";

const Topbar = ({ onToggleSidebar }) => {
  const [isMenuOpen, setisMenuOpen] = useState(false);
  const {isConnected} = useAccount();

  const links = [
    { name: "Product", url: "#" },
    { name: "Service", url: "#" },
    { name: "Integrations", url: "#" },
    { name: "Connect Networks", url: "#" },
    { name: "How it Works", url: "#" },
    { name: "FAQ", url: "#" },
  ];

  return (
    <div className="py-3 px-4 md:px-12 shadow">
      <div className="flex justify-between items-center">
        <div
          className="md:hidden text-2xl text-white cursor-pointer"
          onClick={onToggleSidebar}
        >
          <GoSidebarCollapse />
        </div>
        <div className="md:flex gap-7 hidden">
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
        <div className="flex gap-4 items-center">
          {/* <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="bg-[#1485DB] text-white text-[14px] py-[10px] px-[18px] rounded-[10px] hover:bg-[#0e6fbf] transition-colors duration-200 cursor-pointer"
          >
            Connect Wallet
          </motion.button> */}
          <w3m-button/>
          <button
            onClick={() => setisMenuOpen(!isMenuOpen)}
            className="md:hidden text-white text-2xl focus:outline-none"
          >
            <IoMenu />
          </button>
        </div>
      </div>
      <AnimatePresence>
        {isMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={() => setisMenuOpen(false)}
              className="fixed inset-0 bg-black z-40"
            />

            {/* Sidebar Menu */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 100, damping: 15 }}
              className="fixed top-0 right-0 h-full w-[70%] sm:w-[50%] bg-[#0A0A0A] text-white flex flex-col items-start justify-start pl-[2rem] pt-[6rem] space-y-8 z-50"
            >
              {/* Close Button */}
              <button
                onClick={() => setisMenuOpen(false)}
                className="absolute top-6 right-6 text-2xl"
              >
                <IoClose />
              </button>

              {links.map((item, index) => (
                <motion.a
                  key={index}
                  href="#"
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="text-lg"
                >
                  <Link
                    to={item.url}
                    className="text-[14px] font-man hover:text-[#1485DB] transition-colors duration-200"
                  >
                    {item.name}
                  </Link>
                </motion.a>
              ))}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Topbar;
