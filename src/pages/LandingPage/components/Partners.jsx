import React from "react";
import img98 from "../assets/98.png";
import binance from "../assets/binance.png";
import coinbase from "../assets/coinbase.png";
import tp from "../assets/tp.png";
import walletconnect from "../assets/walletconnect.png";
import metamask from "../assets/metamask.png";
import trsut from "../assets/trsut.png";
import brave from "../assets/brave.png";
import safepat from "../assets/safepat.png";
import mathwallet from "../assets/mathwallet.png";
import blocto from "../assets/blocto.png";
import opera from "../assets/opera.png";
import { motion } from "framer-motion";

const Partners = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
      className="px-4 lg:px-[0rem] py-[6rem] flex justify-center"
    >
      <div className="max-w-[1440px] w-full">
        <h1 className="text-[40px] lg:text-[86px] text-center leading-[70px] lg:leading-[95px] tracking-[-.72px]">
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
        <div className="mt-[6rem] overflow-hidden lg:mx-[14rem]">
          <motion.div
            className="flex gap-12"
            initial={{ x: "100%" }}
            animate={{ x: "-100%" }}
            transition={{ ease: "linear", duration: 20, repeat: Infinity }}
          >
            {[metamask, binance, coinbase, walletconnect, tp, img98].map(
              (item, index) => (
                <div key={index}>
                  <img
                    src={item}
                    alt="logo"
                    className="min-w-[73px] max-w-[73px]"
                  />
                </div>
              )
            )}
          </motion.div>
        </div>
        <div className="mt-8 overflow-hidden lg:mx-[10rem]">
          <motion.div
            className="flex gap-12"
            initial={{ x: "-100%" }}
            animate={{ x: "100%" }}
            transition={{ ease: "linear", duration: 15, repeat: Infinity }}
          >
            {[safepat, blocto, brave, mathwallet, opera, blocto, trsut].map(
              (item, index) => (
                <div key={index}>
                  <img
                    src={item}
                    alt="logo"
                    className="min-w-[73px] max-w-[73px]"
                  />
                </div>
              )
            )}
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default Partners;
