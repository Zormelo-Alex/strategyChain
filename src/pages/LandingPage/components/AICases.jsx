import React from "react";
import { motion } from "framer-motion";
import img from "../assets/image7.png";

const AICases = () => {
  return (
    <div className="px-[4rem] py-[6rem] flex justify-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: true }}
        className="max-w-[1440px]"
      >
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
          className="glass-b rounded-[10px] py-[60px] px-[40px] relative border border-[#ffffff20] transition-all duration-500 hover:shadow-[0px_0px_20px_rgba(255,255,255,0.2)]"
        >
          {/* Animated Glow Effect */}
          <motion.div
            className="absolute inset-0 rounded-[10px] border-[2px] border-transparent animate-glow"
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          />

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: true }}
            className="text-[86px] gradient-text-default text-center"
          >
            Integrates with
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.4 }}
            viewport={{ once: true }}
            className="font-[600] text-center mt-8"
          >
            Compatible with multiple AI models, and onchain strategies.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.6 }}
            viewport={{ once: true }}
            className="mt-[6rem]"
          >
            <img src={img} alt="Image" />
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default AICases;
