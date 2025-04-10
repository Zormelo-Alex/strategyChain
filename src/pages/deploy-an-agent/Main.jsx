import React from "react";
import { motion } from "framer-motion";
import { MdSend } from "react-icons/md";
import { Badge } from "../../components";
import { HiOutlineChartPie } from "react-icons/hi2";
import { PiWalletBold } from "react-icons/pi";
import { RiNewspaperLine } from "react-icons/ri";
import { LuBrainCircuit, LuBox } from "react-icons/lu";





const services = [
  {
    icon: <LuBox className="text-xl" />,
    label: "Blockchain Networks",
  },
  { icon: <HiOutlineChartPie className="text-xl" />, label: "Data Sources" },
  { icon: <PiWalletBold className="text-xl" />, label: "Wallet" },
  { icon: <RiNewspaperLine className="text-xl" />, label: "Smart Contracts" },
  { icon: <LuBrainCircuit className="text-xl" />, label: "AI Models" },
];

const Main = () => {
  return (
    <div className="min-h-screen bg-black text-white px-4 py-12 flex items-center justify-center font-man">
      <div>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-6xl font-semibold text-center"
        >
          <span className="gradient-text">What</span> do{" "}
          <span className="gradient-text-default">you want to automate?</span>{" "}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="mt-4 text-gray-400 text-center"
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
                <Badge className="text-(--primaryColor)">{service.icon}</Badge>
                <span className="text-sm text-white whitespace-nowrap">{service.label}</span>
            </motion.div>
          ))}
        </div>

        <div className="mt-10 w-full flex items-center justify-between bg-[#fff2] rounded-[10px] px-[15px]">
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
