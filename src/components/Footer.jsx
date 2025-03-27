import React from "react";
import { motion, useInView } from "framer-motion";

const Footer = () => {
  const footerLinks = [
    {
      title: "Product",
      links: [
        { name: "AI Agent", url: "#" },
        { name: "How it Works", url: "#" },
        { name: "Integrates with", url: "#" },
        { name: "FAQ", url: "#" },
      ],
    },
    {
      title: "Agent Explorer",
      links: [
        { name: "AI Agents", url: "#" },
        { name: "Deploy Agent", url: "#" },
      ],
    },
    {
      title: "Resources",
      links: [
        { name: "Documentation", url: "#" },
        { name: "Whitepaper", url: "#" },
      ],
    },
    {
      title: "Socials",
      links: [
        { name: "Twitter", url: "https://twitter.com" },
        { name: "Discord", url: "https://discord.com" },
      ],
    },
  ];

  const policyLinks = [
    { name: "Privacy Policy", url: "#" },
    { name: "Terms of Use", url: "#" },
  ];

  return (
    <footer className="text-white pb-16 px-8 font-man">
      <div className="max-w-[1164px] mx-auto">
        {/* Top Section */}
        <motion.div
          className="flex justify-between items-start flex-wrap"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          {/* Logo Section */}
          <div className="mb-6 flex items-center gap-1">
            <img
              src="/logo.png"
              alt="Strategy.Chain Logo"
              className="h-[30px] w-[30px] object-cover"
            />
            Strategy.Chain
          </div>

          {/* Links Section */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
            {footerLinks.map((section, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1, delay: index * 0.2 }}
                viewport={{ once: true }} // Trigger animation once when the element enters the viewport
              >
                <h3 className="font-semibold mb-3">{section.title}</h3>
                <ul className="space-y-2 text-gray-400">
                  {section.links.map((link, i) => (
                    <li key={i}>
                      <a href={link.url} className="hover:text-white">
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.h1
          className="text-[50px] font-[700] xl:text-[166px] mt-8 lg:mt-0 text-center md:text-start"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          viewport={{ once: true }}
        >
          Strategy.Chain
        </motion.h1>

        {/* Bottom Section */}
        <motion.div
          className="mt-16 flex flex-col md:flex-row justify-between items-center text-gray-500 text-sm"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          viewport={{ once: true }}
        >
          <p>©2025 HuriSoft Software Solutions</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            {policyLinks.map((link, index) => (
              <a key={index} href={link.url} className="hover:text-white">
                {link.name}
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
