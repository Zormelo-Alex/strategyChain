import React from "react";
import { Card } from "../../../components";
import img from "../assets/image3.png";
import img1 from "../assets/image4.png";
import img2 from "../assets/image5.png";
import img3 from "../assets/image6.png";
import { motion } from "framer-motion";

const HIW = () => {
  const cardData = [
    {
      img: img,
      title: "Create or Pick an Agent",
      desc: "Start by choosing a pre-built AI agent from the platform or create an agent customed to your blockchain strategy. You can use agent to for trading, email alerts and many others.",
    },
    {
      img: img1,
      title: "Configure & Customize",
      desc: "Select an AI model to power it. Attaching data sources for real-time insights. Define actions (e.g., swap tokens, send alerts). Connect your Wallet. Set rules like execution time, funding, and triggers.",
    },
    {
      img: img2,
      title: "Deploy & Automate",
      desc: " Once your agent is ready, fund it using crypto (ETH, USDT, etc.), review the setup, and deploy it. The agent will now execute tasks automatically based on your strategy.Review your setup in a confirmation window before deployment.",
    },
    {
      img: img3,
      title: "Monitor & Manage",
      desc: "Keep track of your agent’s performance through a real-time dashboard, make adjustments, pause, or scale as needed to optimize results. Receive alerts & insights when key events occur.",
    },
  ];

  return (
    <div className="px-[4rem] py-[6rem] flex justify-center">
      <div className="max-w-[1440px]">
        <motion.h1
          className="text-[86px] gradient-text-default"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          How it works
        </motion.h1>

        <div className="grid grid-cols-2 gap-8 mt-10">
          {cardData.map((item, index) => (
            <Card>
              <motion.div
                key={index}
                className="glass-b rounded-[10px] p-[40px] max-w-[667px] flex flex-col items-center"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.2,
                  ease: "easeOut",
                }}
                whileHover={{ scale: 1.05 }}
              >
                <img src={item.img} alt="" className="w-[586px]" />
                <div className="flex flex-col items-start justify-start w-[586px] mt-10">
                  <h2 className="flex gap-2 text-[32px] tracking-[.5px]">
                    <span className="text-(--primaryColor)">0{index + 1}.</span>
                    <p>{item.title}</p>
                  </h2>
                  <p className="tracking-[.5px] text-[14px] text-[#858585]">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HIW;
