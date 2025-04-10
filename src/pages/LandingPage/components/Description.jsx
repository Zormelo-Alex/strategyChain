import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { IoMdArrowForward } from "react-icons/io";
import { Button } from "../../../components";
import img1 from "../assets/image1.png";
import img2 from "../assets/image2.png";
import { useNavigate } from "react-router-dom";

const textVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 1 } },
};

const imageVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { duration: 1, delay: 0.3 } },
};

const Description = () => {
  const navigate = useNavigate()
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <div ref={ref} className="p-4 lg:px-[4rem] py-[6rem] flex justify-center">
      <div className="max-w-[1440px]">
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          transition={{ staggerChildren: 0.3 }}
          className="text-[40px] lg:text-[60px] font-[400] leading-[70px] lg:leading-[86px]"
        >
          {/* First Text Line */}
          <motion.p className="flex gap-2 flex-wrap items-center" variants={textVariants}>
            Strategy{" "}
            <span className="gradient-text-default">Chain is your</span> Knight{" "}
            <motion.span variants={imageVariants}>
              <img src={img1} alt="png" className="w-[89px] lg:w-[120px]" />
            </motion.span>
          </motion.p>

          {/* Second Text Line */}
          <motion.p variants={textVariants}>
            making calculated moves on the blockchain
          </motion.p>

          {/* Third Text Line */}
          <motion.p className="flex gap-2 flex-wrap items-center" variants={textVariants}>
            You,{" "}
            <span className="gradient-text-default">our Kings and Queens</span>{" "}
            <motion.span variants={imageVariants}>
              <img src={img2} alt="png" className="w-[110px] lg:w-[150px]" />
            </motion.span>
          </motion.p>

          {/* Fourth Text Line */}
          <motion.p variants={textVariants}>
            command the board with power and protection.
          </motion.p>
        </motion.div>

        {/* Button Animation */}
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          transition={{ duration: 1, delay: 1.2 }}
          className="mt-10"
        >
          <Button className="text-[14px] px-6 py-3 capitalize" onClick={()=> navigate("/app/deploy-an-agent")}>
            Deploy an Agent Now
          </Button>
        </motion.div>
      </div>
    </div>
  );
};

export default Description;
