import React, { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { Footer, Navbar } from "../components";

const Layout = () => {
  const location = useLocation();
  useEffect(() => {
    scrollTo(0, 0);
  }, [location.pathname]);
  return (
    <div className="min-h-screen w-full flex flex-col items-center bg-[#0A0A0A] overflow-x-hidden">
      <div className="relative">
        <Navbar />
      </div>
      <div className="w-full relative z-[1]">
        <Outlet />
      </div>
      <div className="pt-[5rem] w-full">
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
