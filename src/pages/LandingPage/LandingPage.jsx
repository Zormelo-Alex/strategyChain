import React from "react";
import AnimatedBG from "../../components/AnimatedBG";

const LandingPage = () => {
  return (
    <div className="min-h-screen text-white">
      <AnimatedBG />
      <div className="relative z-20 p-8 pt-[12rem]">
        <h1 className="text-[86px] text-center tracking-[-.72px]">
          Automate.Customize.Deploy.
          <br />
          AI-powered agents.
        </h1>
        <p className="font-[600] text-center  mt-4">
          Deploy your own Blockchain AI Agents with a few Clicks.
        </p>
      </div>
    </div>
  );
};

export default LandingPage;
