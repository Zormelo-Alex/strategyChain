import React from "react";
import { Outlet } from "react-router-dom";
import { SideBar, Topbar } from "../components";

const Layout = () => {
  return (
    <div className="flex h-screen overflow-hidden tracking-wide">
      <div>
        <SideBar />
      </div>
      <div className="w-full overflow-hidden">
        <Topbar />
        <div className="h-screen overflow-y-scroll pb-[4rem] bg-[#F0F2F7] scroll-nice">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Layout;
