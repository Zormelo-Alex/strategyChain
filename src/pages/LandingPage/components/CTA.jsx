import React from "react";
import { motion } from "framer-motion";
import { AnimatedBG, Button } from "../../../components";

const CTA = () => {
  return (
    <div className="px-4 lg:px-[4rem] flex justify-center relative">
      <AnimatedBG />
      <motion.div
        className="max-w-[1440px] z-20 flex justify-center items-center h-full w-full py-[12rem]"
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <div>
          {/* Animated Heading */}
          <motion.h1
            className="text-[42px] lg:text-[86px] text-center leading-[50px] lg:leading-[95px] tracking-[-.72px]"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
          >
            Automate
            <span className="gradient-text-default">
              .<br className="sm:hidden"/>Customize.
            </span>Deploy. <br />
            <span className="gradient-text-default">AI-powered agents.</span>
          </motion.h1>

          {/* Animated Paragraph */}
          <motion.p
            className="font-[600] text-center mt-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
          >
            Deploy your own Blockchain AI Agents with a few Clicks.
          </motion.p>

          {/* Animated Button Container */}
          <motion.div
            className="flex justify-center mt-14"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
          >
            <div className="flex gap-5 bg-[#0F0F0F] rounded-[10px] px-2 py-2 text-[14px]">
              {/* Animated Buttons */}
              <motion.button
                className="px-4 py-2 cursor-pointer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                Explore Agents
              </motion.button>

              <motion.div whileTap={{ scale: 0.95 }}>
                <Button className="px-4 py-2">Deploy Agent</Button>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default CTA;
