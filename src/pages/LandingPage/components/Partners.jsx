import React from "react";
import img from "../assets/p1.png";
import { motion } from "framer-motion";

const Partners = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
      className="px-[0rem] py-[6rem] flex justify-center"
    >
      <div className="max-w-[1440px] w-full">
        <h1 className="text-[86px] text-center leading-[95px] tracking-[-.72px]">
          Conne
          <span className="gradient-text-default">
            cted Data Sources and{" "}
          </span>{" "}
          Block<span className="gradient-text-default">chain Technolog</span>ies
        </h1>
        <p className="font-[600] text-center mt-8">
          Seamless connectivity for real-time insights and multi-chain
          execution.
        </p>
        <div className="mt-[6rem] overflow-hidden">
          <motion.div
            className="flex gap-12"
            initial={{ x: "100%" }}
            animate={{ x: "-100%" }}
            transition={{ ease: "linear", duration: 20, repeat: Infinity }}
          >
            {[...Array(10)].map((item, index) => (
              <div key={index}>
                <img src={img} alt="logo" className="w-[73px]" />
              </div>
            ))}
          </motion.div>
        </div>
        <div className="mt-4 overflow-hidden">
          <motion.div
            className="flex gap-12"
            initial={{ x: "-100%" }}
            animate={{ x: "100%" }}
            transition={{ ease: "linear", duration: 15, repeat: Infinity }}
          >
            {[...Array(10)].map((item, index) => (
              <div key={index}>
                <img src={img} alt="logo" className="w-[73px]" />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default Partners;
