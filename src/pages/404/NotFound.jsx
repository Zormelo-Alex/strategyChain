import React from 'react'
import { Link } from 'react-router-dom'
import "./pnf.css"

const PageNotFound = () => {
  return (
    <div
      className="min-h-screen flex flex-col justify-center items-center bg-black text-white relative overflow-hidden"
      style={{
        background:
          "radial-gradient(circle, rgba(0,0,0,1) 0%, rgba(20,20,20,1) 100%)",
      }}
    >
      {/* Glowy Background Effect */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background:
            "radial-gradient(circle, rgba(255,255,255,0.05) 0%, rgba(0,0,0,0) 60%)",
          animation: "pulseGlow 6s infinite alternate",
        }}
      ></div>

      {/* Content */}
      <div className="relative z-10 text-center">
        {/* 404 Text with Glow */}
        <h1
          className="text-[120px] sm:text-[200px] font-bold gradient-text-glow"
          style={{
            background: "linear-gradient(45deg, #2950DB, #fff)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            textShadow: "0 0 20px #2950DB, 0 0 10px #2950db36",
          }}
        >
          404
        </h1>

        {/* Message */}
        <p className="text-[18px] sm:text-[24px] text-[#f8f8f8c0] mb-8">
          Oops! The page you're looking for doesn't exist.
        </p>

        {/* Back Home Button */}
        <Link
          to="/"
          className="inline-block px-8 py-3 rounded-full text-white font-semibold transition-all duration-300 hover:scale-105"
          style={{
            background:
              "linear-gradient(45deg, #2950DB, #2950db36)",
            boxShadow: "0 0 15px #2950db36, 0 0 10px #2950DB",
          }}
        >
          Go Back Home
        </Link>
      </div>

      {/* Floating Glow Particles */}
      <div className="absolute inset-0 z-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-white rounded-full"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animation: `float ${Math.random() * 6 + 3}s infinite ease-in-out`,
              boxShadow: "0 0 10px rgba(255, 255, 255, 0.8), 0 0 20px rgba(255, 255, 255, 0.6)",
            }}
          ></div>
        ))}
      </div>
    </div>
  )
}

export default PageNotFound