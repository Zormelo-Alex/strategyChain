import React from "react";
import { motion } from "framer-motion";
import img from "../assets/image11.png";
import { Badge, Button } from "../../../components";

const AICases = () => {
  return (
    <div className="p-4 lg:px-[4rem] py-[6rem] flex justify-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: true }}
        className="max-w-[1440px] w-full"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Side (Text) */}
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <Badge className="text-[14px]">Integrates With</Badge>
            <h2 className="text-[32px] sm:text-[40px] md:text-[50px] tracking-[-.72px] leading-[40px] sm:leading-[50px] md:leading-[60px] mt-8">
              <span className="gradient-text-default">
                Compatible with multiple
              </span>{" "}
              <br />
              <span className="gradient-text-default">
                AI models, and onchain strategies.
              </span>
            </h2>
            <p className="font-[600] mt-6 text-[14px] sm:text-[16px] md:text-[18px]">
              Seamlessly connect with powerful AI models to enhance automation,
              decision-making, and strategic execution on the blockchain.
            </p>

            {/* Buttons */}
            <motion.div
              className="flex justify-start mt-10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <div className="flex gap-5 bg-[#0F0F0F] rounded-[10px] px-2 py-2 text-[14px] border border-[#4444441d]">
                <motion.button
                  className="px-4 py-2 cursor-pointer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Explore Agents
                </motion.button>

                <motion.div whileTap={{ scale: 0.95 }}>
                  <Button className="px-6 py-3">Deploy Agent</Button>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Side (Image) */}
          <motion.div
            className="flex justify-center md:justify-end"
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <img
              src={img}
              alt="AI tools"
              className="w-[80%] sm:w-[400px] md:w-[500px] lg:w-[502px]"
            />
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default AICases;
