import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Navigation, Pagination } from "swiper/modules";
import { IoMdArrowForward, IoMdArrowBack } from "react-icons/io";
import { motion } from "framer-motion";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "../../../css/swipper.css";

const HIWs = () => {
  const swiperRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const cards = [
    {
      title: "Configure & Customize",
      details:
        "Select an AI model to power it. Attach data sources for real-time insights. Define actions (e.g., swap tokens, send alerts). Connect your wallet and set rules like execution time, funding, and triggers.",
    },
    {
      title: "Deploy & Automate",
      details:
        "Once your agent is ready, fund it using crypto (ETH, USDT, etc.), review the setup, and deploy it. The agent will now execute tasks automatically based on your strategy. Review your setup in a confirmation window before deployment.",
    },
    {
      title: "Monitor & Optimize",
      details:
        "Track performance, adjust parameters, and optimize results with AI-driven insights to maximize efficiency.",
    },
  ];

  return (
    <motion.div
      className="bg-[#0F0F0F] py-[6rem]"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <div className="px-4 lg:px-0 flex justify-center">
        <div className="max-w-[1440px] w-full flex flex-col justify-center items-center">
          {/* Title Section */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-5 w-full gap-6 md:gap-0"
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="md:col-span-4">
              <h1 className="text-[32px] sm:text-[42px] lg:text-[50px] leading-[60px] md:leading-[60px] tracking-[-.72px] text-white">
                <span className="gradient-text-default">
                  How does the process work
                </span>
                <br />
                <span className="gradient-text-default">
                  to provide you service?
                </span>
              </h1>
            </div>
            <div className="md:col-span-1 flex gap-5 justify-start md:justify-end">
              <button
                className="p-2 rounded-full border border-(--primaryColor) h-fit text-(--primaryColor) cursor-pointer"
                onClick={() => swiperRef.current?.slidePrev()}
              >
                <IoMdArrowBack />
              </button>
              <button
                className="p-2 rounded-full border border-(--primaryColor) h-fit text-(--primaryColor) cursor-pointer"
                onClick={() => swiperRef.current?.slideNext()}
              >
                <IoMdArrowForward />
              </button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Cards Section */}
      <motion.div
        className="mt-[4rem] w-full flex justify-center gap-4 md:gap-8 px-4"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.4 }}
        viewport={{ once: true }}
      >
        <Swiper
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          grabCursor={true}
          centeredSlides={true}
          loop={true}
          slidesPerView={1}
          breakpoints={{
            768: { slidesPerView: "auto" },
          }}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 2.5,
            slideShadows: true,
          }}
          pagination={{
            el: ".custom-pagination",
            clickable: true,
          }}
          modules={[EffectCoverflow, Pagination, Navigation]}
          effect={"coverflow"}
          onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
        >
          {cards.map((item, index) => (
            <SwiperSlide key={index}>
              <motion.div
                className={`md:w-[500px] border rounded-[20px] shadow-lg flex flex-col justify-center py-[40px] px-[30px] md:py-[52px] md:px-[50px] transition-all duration-500 ${
                  activeIndex === index
                    ? "bg-gradient-to-b from-[#54AFF4] border-[#ffffff51] to-[#095288]"
                    : "bg-[#0A0A0A] border-transparent hover:border-(--primaryColor)"
                }`}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <h2
                  className={`mb-3 font-[600] text-[20px] md:text-[25px] ${
                    activeIndex !== index && "text-(--primaryColor) "
                  }`}
                >
                  Step {index + 1}
                </h2>
                <h1 className="text-[25px] md:text-[31px] font-[400] tracking-[.5px]">
                  {item.title}
                </h1>
                <p className="mt-3 font-[500] text-[14px] md:text-[16px]">
                  {item.details}
                </p>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </motion.div>
      <div className="custom-pagination flex justify-center gap-2 mt-6"></div>
    </motion.div>
  );
};

export default HIWs;
