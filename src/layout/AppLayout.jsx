import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import { SideBar, Topbar } from "../components";
import { AnimatePresence, motion } from "framer-motion";

const AppLayout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen overflow-hidden tracking-wide bg-[#0A0A0A] text-white relative">
      {/* Sidebar (desktop) */}
      <div className="hidden md:block">
        <SideBar />
      </div>

      {/* Sidebar (mobile overlay) */}
      <AnimatePresence>
        {isSidebarOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={() => setIsSidebarOpen(false)}
              className="fixed inset-0 z-40 bg-black"
            />

            {/* Sidebar */}
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ duration: 0.3 }}
              className="fixed inset-y-0 left-0 z-50 w-64 bg-[#0A0A0A]"
            >
              <SideBar onToggleSidebar={() => setIsSidebarOpen(false)} />
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Main Content */}
      <div className="w-full overflow-hidden">
        <Topbar onToggleSidebar={() => setIsSidebarOpen(true)} />
        <div className="h-screen overflow-y-scroll pb-[4rem] bg-[#101010] nice-scroll">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default AppLayout;
