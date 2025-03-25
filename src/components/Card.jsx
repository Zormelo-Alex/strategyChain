import React, { useState } from "react";
import { motion } from "framer-motion";

const Card = ({ children }) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const { left, top, width, height } =
      e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - left) / width) * 100;
    const y = ((e.clientY - top) / height) * 100;
    setMousePosition({ x, y });
  };
  return (
    <motion.div onMouseMove={handleMouseMove} className="relative w-fit">
      <motion.div
        className="absolute inset-0 rounded-xl"
        style={{
          background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, #1485DB, transparent 40%)`,
        }}
      />

      {/* Card Content */}
      {children}
    </motion.div>
  );
};

export default Card;
