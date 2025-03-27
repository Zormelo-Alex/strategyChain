import React from "react";
import { FaArrowRight } from "react-icons/fa6";

const Button = ({ children, className = "", onClick }) => {
  return (
    <button 
      className={`bg-[#1485DB] hover:bg-[#1477db] flex items-center gap-2 text-[14px] font-[500] rounded-[10px] cursor-pointer group transition-all duration-300 ${className}`} 
      onClick={onClick}
    >
      {children}
      <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-2" />
    </button>
  );
};

export default Button;
