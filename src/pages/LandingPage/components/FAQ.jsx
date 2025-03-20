import React, { useState } from "react";
import { motion } from "framer-motion";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import { MdOutlineArrowOutward } from "react-icons/md";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const faqs = [
    {
      question: "What is Strategy Chain?",
      answer:
        "Strategy Chain is an automation platform that leverages AI and blockchain technology to optimize workflows and decision-making.",
    },
    {
      question: "How does Strategy Chain work?",
      answer:
        "Strategy Chain integrates AI agents with blockchain technology to execute automated processes, ensuring transparency and efficiency.",
    },
    {
      question: "What kind of AI agents can I deploy?",
      answer:
        "You can deploy AI agents for trading, customer support, data analysis, and various other automated tasks depending on your needs.",
    },
    {
      question: "Can I customize my AI agent?",
      answer:
        "Yes, Strategy Chain allows full customization of AI agents, enabling users to configure behaviors, decision parameters, and integrations.",
    },
    {
      question: "What happens if my agent runs out of funds?",
      answer:
        "If your agent runs out of funds, it will pause its operations until additional funds are allocated or replenished by the user.",
    },
    {
      question:
        "What makes Strategy Chain different from other automation platforms?",
      answer:
        "Strategy Chain stands out due to its seamless AI-blockchain integration, high security, and real-time execution capabilities.",
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  return (
    <div className="px-4 lg:px-[4rem] py-[6rem] flex justify-center">
      <div className="max-w-[1440px] w-full">
        <h2 className="text-[42px] md:text-[86px] text-center md:text-start leading-[70px] md:leading-[95px] tracking-[-.72px]">
          Freque<span className="gradient-text-default">ntly Asked Que</span>
          stions
        </h2>
        <div className="mt-[4rem] md:mt-[6rem] bg-[#111010] rounded-[10px] px-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`overflow-hidden   ${
                index + 1 != faqs.length && "border-b border-[#232323]"
              }`}
            >
              <button
                className={`w-full flex justify-between items-center py-[20px] pl-[20px] lg:pl-[50px] cursor-pointer hover:text-gray-300 transition  ${
                  openIndex == index
                    ? "rounded-none"
                    : `${index == 0 && "rounded-t-[10px]"} ${
                        index + 1 == faqs.length && "rounded-b-[10px]"
                      }`
                } `}
                onClick={() => toggleFAQ(index)}
              >
                <span className="font-[400] flex text-start items-center gap-3">
                  <MdOutlineArrowOutward
                    size={20}
                    className="text-(--primaryColor)"
                  />{" "}
                  {faq.question}
                </span>
                {openIndex === index ? (
                  <FiChevronUp size={20} />
                ) : (
                  <FiChevronDown size={20} />
                )}
              </button>
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{
                  height: openIndex === index ? "auto" : 0,
                  opacity: openIndex === index ? 1 : 0,
                }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="pb-4 pl-[70px] text-gray-500 font-[400]">
                  {faq.answer}
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;
