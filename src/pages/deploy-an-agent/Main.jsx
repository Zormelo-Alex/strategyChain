import React from "react";
import { motion } from "framer-motion";
import { MdSend } from "react-icons/md";
import img1 from "./assets/image1.png"
import img12 from "./assets/image2.png"
import img3 from "./assets/image3.png"
import img4 from "./assets/image4.png"
import img5 from "./assets/image5.png"





const services = [
  {
    icon: img1,
    label: "Blockchain Networks",
  },
  { icon: img12, label: "Data Sources" },
  { icon: img3, label: "Wallet" },
  { icon: img4, label: "Smart Contracts" },
  { icon: img5, label: "AI Models" },
];

const Main = () => {
  return (
    <div className="min-h-screen bg-black text-white px-4 py-12 flex items-center justify-center">
      <div>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-6xl text-center"
        >
          <span className="gradient-text">What</span> do{" "}
          <span className="gradient-text-default">you want to automate?</span>{" "}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="mt-4 text-gray-400 text-center font-man"
        >
          Start by typing something here and Strategy.Chain will help you
          achieve it.
        </motion.p>

        <div className="mt-10 flex flex-wrap gap-4">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.05 }}
              className="w-fit h-fit border border-[#232323] rounded-[10px] px-[10px] py-[9px] cursor-pointer pr-[20px] flex items-center gap-2"
            >
              <img src={service.icon} className="h-[45px] w-[45px]" alt="" />
                <span className="text-sm text-white whitespace-nowrap">{service.label}</span>
            </motion.div>
          ))}
        </div>

        <div className="mt-10 w-full flex items-center justify-between bg-[#fff2] rounded-[10px] px-[15px] h-[60px]">
          <div className=" text-white text-xl">
            <img src="/logo.png" alt="" className="w-[30px]" />
          </div>
          <input
            type="text"
            placeholder="Type something here"
            className="w-full bg-transparent text-white p-4 px-[15px] text-[14px] placeholder-gray-400 outline-none"
          />
          <button className=" text-(--primaryColor) cursor-pointer text-xl hover:text-blue-500 transition-all ease-in">
            <MdSend />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Main;
