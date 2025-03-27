import React from "react";

const Badge = ({ children, className = "", onClick }) => {
  return (
    <div
      className={`glass-b border-[1px] border-[#414141] relative rounded-[8px] w-fit py-[8px] px-[20px] font-man ${className}`}
      onClick={onClick}
    >
      <div className="w-[50%] rounded-full h-[1px] gradient-background absolute top-[-1px] right-[10px]"></div>
      <p className="gradient-text">{children}</p>
    </div>
  );
};

export default Badge;
