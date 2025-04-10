import React from "react";
import { Outlet } from "react-router-dom";
import { SideBar, Topbar } from "../components";

const AppLayout = () => {
  return (
    <div className="flex h-screen overflow-hidden tracking-wide bg-[#0A0A0A] text-white">
      <div>
        <SideBar />
      </div>
      <div className="w-full overflow-hidden">
        <Topbar />
        <div className="h-screen overflow-y-scroll pb-[4rem] bg-[#101010] nice-scroll">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default AppLayout;
