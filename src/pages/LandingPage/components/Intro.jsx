import React from "react";
import { AnimatedBG, Button } from "../../../components";
import { motion } from "framer-motion";

const Intro = () => {
  return (
    <>
      <div className="min-h-screen relative">
        <AnimatedBG />

        <div className="relative z-20 p-8 pt-[17rem]">
          <>
            {/* Heading Animation */}
            <motion.h1
              className="text-[86px] text-center tracking-[-.72px] leading-[86px]"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              Automate.
              <span className="gradient-text-default">Customize</span>. Deploy.
              <br />
              AI-<span className="gradient-text-default">powered agents.</span>
            </motion.h1>

            {/* Subtitle Animation */}
            <motion.p
              className="font-[600] text-center mt-14 font-man"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
            >
              Deploy your own Blockchain AI Agents with a few Clicks.
            </motion.p>

            {/* Button Container Animation */}
            <motion.div
              className="flex justify-center mt-14"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
            >
              <div className="flex gap-5 bg-[#0F0F0F] rounded-[10px] px-2 py-2 text-[14px]">
                <motion.button
                  className="px-4 py-2 cursor-pointer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Explore Agents
                </motion.button>

                <motion.div whileTap={{ scale: 0.95 }}>
                  <Button className="px-4 py-2">Deploy Agent</Button>
                </motion.div>
              </div>
            </motion.div>
          </>
        </div>
      </div>
    </>
  );
};

export default Intro;
