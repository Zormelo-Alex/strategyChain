import React from "react";
import Description from "./components/Description";
import Intro from "./components/Intro";
import HIW from "./components/HIW";
import AICases from "./components/AICases";
import Partners from "./components/Partners";
import CTA from "./components/CTA";
import FAQ from "./components/FAQ";
import Services from "./components/Services";
import HIWs from "./components/HIWs";

const LandingPage = () => {
  return (
    <div className="text-white">
      <Intro />
      <Description />
      <Services />
      <AICases />
      <HIWs/>
      {/* <HIW /> */}
      <Partners />
      <FAQ />
      <CTA />
    </div>
  );
};

export default LandingPage;
