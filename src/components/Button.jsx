import React from "react";
import { motion } from "framer-motion";
import "../css/Btn.css";

const Button = ({ children, className = "", onClick }) => {
  return (
    <button className={`btn-anim cursor-pointer ${className}`} onClick={onClick}>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      {children}
    </button>
  );
};

export default Button;
