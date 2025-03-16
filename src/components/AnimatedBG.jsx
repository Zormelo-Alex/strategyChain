import React, { useEffect, useState } from "react";
import "../css/Bg.css";

const AnimatedBG = () => {
  const [circles, setCircles] = useState([]);

  useEffect(() => {
    // Create random circles
    const numCircles = 6; // Number of circles
    const newCircles = [];
    for (let i = 0; i < numCircles; i++) {
      const size = Math.random() * 200 + 200; // Random size between 100px and 300px
      const positionX = Math.random() * 100; // Random X position percentage (0 to 100)
      const positionY = Math.random() * 100; // Random Y position percentage (0 to 100)
      const animationDelay = Math.random() * 4 + "s"; // Random delay for animations

      newCircles.push({
        size,
        positionX,
        positionY,
        animationDelay,
      });
    }
    setCircles(newCircles);
  }, []);
  return (
    <div className="absolute w-full h-full left-0 overflow-hidden">
      <div className="bg-glass z-[1] h-full w-full absolute"></div>
      {circles.map((circle, index) => (
        <div
          key={index}
          className="absolute rounded-full bg-[#219bf8] opacity-60 animate-move-glow"
          style={{
            width: `${circle.size}px`,
            height: `${circle.size}px`,
            top: `${circle.positionY}%`,
            left: `${circle.positionX}%`,
            animationDelay: circle.animationDelay,
          }}
        ></div>
      ))}
    </div>
  );
};

export default AnimatedBG;
