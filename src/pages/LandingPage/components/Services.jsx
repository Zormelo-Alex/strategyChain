import React from "react";
import { motion } from "framer-motion";
import { Badge } from "../../../components";
import img from "../assets/image8.png";
import img2 from "../assets/image9.png";
import img3 from "../assets/image10.png";

const Services = () => {
  const cardData = [
    {
      img: img,
      title: " The Rook – Secure Execution",
      details:
        "Ensures safe and reliable smart contract interactions, automating transactions with precision.",
    },
    {
      img: img2,
      title: " The Bishop – Intelligent Insights",
      details:
        "Provides real-time analytics and AI-powered decision-making to optimize your strategies.",
    },
    {
      img: img3,
      title: "The Pawn – Scalable Automation",
      details:
        "Deploys and manages AI agents for executing repetitive tasks, allowing you to scale effortlessly.",
    },
  ];

  return (
    <div className="p-4 lg:px-[4rem] py-[6rem] flex justify-center">
      <div className="max-w-[1440px] w-full">
        {/* Animated Badge */}
        <motion.div 
          className="flex justify-center mb-[2rem] sm:mb-[4rem]"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Badge className="text-[14px] font-[500]">Services</Badge>
        </motion.div>

        {/* Animated Heading & Description */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h1 className="text-[32px] sm:text-[42px] lg:text-[50px] leading-[60px] gradient-text-default text-center">
            AI-Powered Blockchain Services
          </h1>
          <p className="font-[600] text-center mt-4 sm:mt-8">
            Unlock AI-powered blockchain automation with Strategy Chain’s intelligent agents.
          </p>
        </motion.div>

        {/* Animated Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12 mt-[4rem] sm:mt-[6rem]">
          {cardData.map((item, index) => (
            <motion.div
              key={index}
              className={`rounded-[20px] bg-gradient-to-b ${
                index === 0 ? "from-[#54AFF4] to-[#095288] hover:border-[#fff]" : "bg-[#0F0F0F] hover:border-(--primaryColor)"
              } py-[40px] sm:py-[52px] px-[30px] sm:px-[50px] transition-all ease-in duration-500 border-transparent border cursor-pointer`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <img src={item.img} alt="" className="w-[100px] sm:w-[120px]" />
              <h3 className="text-[24px] sm:text-[30px] font-[500] mt-4">{item.title}</h3>
              <p className="font-[600] leading-[26px] mt-4">{item.details}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
