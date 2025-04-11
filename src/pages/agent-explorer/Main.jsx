import React from "react";
import { motion } from "framer-motion";
import { FaChevronRight } from "react-icons/fa6";
import { Badge } from "../../components";
import img from "./assets/image1.png";

const Main = () => {
  const agents = Array.from({ length: 9 }, (_, i) => ({
    id: i + 1,
    name: "Trade at 20",
    description:
      "Buy NFT currently valued at 0.5ETH and sell when it hits $3,000.00",
    badges: [
      "Free",
      i % 2 === 0 ? "Trading" : i % 3 === 0 ? "E-mail" : "Selling",
    ],
    recentlyAdded: i % 2 === 0,
  }));

  return (
    <div className="min-h-screen bg-[#000] text-white px-6 py-12">
      <div className="p-6 md:p-10 bg-gradient-to-b from-[#54AFF4] to-[#095288] border-[#ffffff51] rounded-[20px] lg:h-[250px] mb-8 flex flex-col lg:flex-row justify-between items-center gap-6">
        {/* Left Content */}
        <div className="flex-1 text-center lg:text-left">
          <Badge className="bg-black font-[500] text-[12px]" notglass={true}>
            Agent Explorer
          </Badge>
          <h1 className="text-[28px] md:text-[36px] lg:text-[40px] mt-4 leading-tight font-bold">
            What do you want to automate?
          </h1>
          <p className="mt-2 font-[600] font-man text-sm md:text-base">
            Start by typing something here and Strategy.Chain will help you
            achieve it.
          </p>
        </div>

        {/* Image */}
        <div className="flex-shrink-0">
          <img
            src={img}
            alt="icon"
            className="h-[160px] md:h-[200px] lg:h-[250px] object-contain lg:relative lg:top-[-2rem]"
          />
        </div>
      </div>

      {/* Header */}
      <div className="flex justify-between items-center">
        <div className="mb-8">
          <h2 className="text-3xl font-bold mb-2">Trending Agents</h2>
          <a href="#" className="text-sm text-blue-400 underline">
            Browse our AI agents list and modify.
          </a>
        </div>

        {/* Search + Filters */}
        <div className="mb-10 flex flex-col md:flex-row md:items-center gap-4">
          <input
            type="text"
            placeholder="Search"
            className="bg-[#1C1F26] text-white px-4 py-2 rounded-md w-full md:w-1/2 focus:outline-none"
          />
          <select className="bg-[#1C1F26] text-white px-4 py-2 rounded-md">
            <option>All Categories</option>
            <option>Trading</option>
            <option>Buying</option>
          </select>
          <select className="bg-[#1C1F26] text-white px-4 py-2 rounded-md">
            <option>Order By</option>
            <option>Popular</option>
            <option>Recently Added</option>
          </select>
        </div>
      </div>

      {/* Agent Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mx-auto">
        {agents.map((agent, index) => (
          <motion.div
            key={agent.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{
              scale: 1.03,
              boxShadow: "0 8px 20px rgba(255,255,255,0.05)",
            }}
            viewport={{ once: true }}
            className="bg-[#1C1F26] p-5 rounded-xl border border-[#2A2F3A] transition-all"
          >
            {/* Top badge */}
            {agent.recentlyAdded && (
              <span className="bg-[#2A2F3A] text-white text-xs px-2 py-1 rounded-full mb-3 inline-block">
                Recently Added
              </span>
            )}

            {/* Title */}
            <h3 className="text-lg font-semibold mb-1">{agent.name}</h3>

            {/* Description */}
            <p className="text-sm text-gray-400 mb-4">{agent.description}</p>

            {/* Badges */}
            <div className="flex flex-wrap gap-2 mb-4">
              {agent.badges.map((badge, i) => (
                <span
                  key={i}
                  className={`px-2 py-1 text-xs rounded-full ${
                    badge === "Free"
                      ? "bg-green-700 text-green-200"
                      : "bg-[#2A2F3A] text-white"
                  }`}
                >
                  {badge}
                </span>
              ))}
            </div>

            {/* CTA */}
            <div className="flex justify-end">
              <button className="w-8 h-8 bg-[#2A2F3A] rounded-full flex items-center justify-center hover:bg-blue-600 transition">
                <FaChevronRight size={16} />
              </button>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center mt-10 gap-2 items-center">
        <button className="px-3 py-1 rounded bg-[#2A2F3A] text-gray-400 cursor-not-allowed">
          Prev
        </button>
        {[1, 2, 3].map((p) => (
          <button
            key={p}
            className={`px-3 py-1 rounded ${
              p === 1 ? "bg-blue-600 text-white" : "bg-[#2A2F3A] text-white"
            }`}
          >
            {p}
          </button>
        ))}
        <button className="px-3 py-1 rounded bg-[#2A2F3A] text-white">
          Next
        </button>
      </div>
    </div>
  );
};

export default Main;
