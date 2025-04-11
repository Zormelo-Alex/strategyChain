import React, { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { BiChevronDown, BiChevronUp } from "react-icons/bi";
import { TbChartAreaLine } from "react-icons/tb";
import { CiSearch } from "react-icons/ci";
import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import { Dashboard, Parameters, Routes } from "../../routes/routeData";
import { GoChevronRight, GoSidebarExpand, GoChevronLeft } from "react-icons/go";
import { Documentation } from "../../routes/routeData";

const SideBar = ({ onToggleSidebar }) => {
  const [isOpen, setIsOpen] = useState(true);
  const [expandedRoutes, setExpandedRoutes] = useState({});

  const dashRoutes = Dashboard;
  const routes = Routes;
  const params = Parameters;
  const docs = Documentation;

  const textAnimation = {
    hidden: {
      padding: 0,
      opacity: 0,
      transition: {
        duration: 0.1,
      },
    },
    show: {
      padding: 0,
      opacity: 1,
      transition: {
        duration: 0.2,
      },
    },
  };

  const toggleRouteExpansion = (routeName) => {
    setExpandedRoutes((prevExpandedRoutes) => ({
      ...prevExpandedRoutes,
      [routeName]: !prevExpandedRoutes[routeName],
    }));
  };

  return (
    <div className="flex z-50 relative font-man">
      <motion.div
        animate={{ width: isOpen ? "280px" : "100px" }}
        className="h-screen border-r border-transparent text-gray-500 overflow-y-auto hide-scroll px-4"
        style={{ maxHeight: "100vh" }}
      >
        <div
          className="cursor-pointer text-[14px] hidden lg:block bg-[#383838]  rounded-full p-2 absolute top-[3.0rem] right-[-1.0rem] z-[1000]"
          onClick={() => setIsOpen(!isOpen)}
        >
          <div className="text-white">
            {isOpen ? <GoChevronLeft /> : <GoChevronRight />}
          </div>
        </div>
        <div className="flex items-center justify-between">
          <Link
            to={"/"}
            className="flex items-center justify-start  gap-1 my-9 min-h-[30px]"
          >
            <AnimatePresence>
              <div className="" onClick={() => setIsOpen(!isOpen)}>
                <img
                  src="/logo.png"
                  alt="logo"
                  className="h-[30px] object-contain"
                />
              </div>
              {isOpen && (
                <motion.h1
                  variants={textAnimation}
                  initial={"hidden"}
                  animate={"show"}
                  exit={"hidden"}
                  className=""
                >
                  <p className="text-white font-[600] text-[20px] tracking-wide leading-0.5">
                    Strategy.Chain
                  </p>
                </motion.h1>
              )}
            </AnimatePresence>
          </Link>
          <div
            className=" text-white cursor-pointer md:hidden"
            onClick={onToggleSidebar}
          >
            <GoSidebarExpand className="text-[25px]" />
          </div>
        </div>
        <div>
          <AnimatePresence>
            {isOpen ? (
              <motion.h1
                variants={textAnimation}
                initial={"hidden"}
                animate={"show"}
                exit={"hidden"}
                className=""
              >
                <div className="flex gap-2 justify-between bg-[#f5f5f520] items-center p-3 text-white rounded-[10px] outline-none">
                  <input
                    type="search"
                    placeholder="Search"
                    className="outline-none border-none bg-transparent font-[500] tracking-wide w-full focus-within:outline-none font-man text-[14px]"
                  />
                  <CiSearch className="text-[20px]" />
                </div>
              </motion.h1>
            ) : (
              <div
                className="p-3 cursor-pointer flex justify-center"
                onClick={() => setIsOpen(!isOpen)}
              >
                <CiSearch className="text-[20px]" />
              </div>
            )}
          </AnimatePresence>
        </div>
        <div className="mt-2">
          <div className="py-4">
            <section className="text-white">
              {dashRoutes.map((route, index) =>
                route.children ? (
                  <div
                    key={index}
                    className={`${
                      expandedRoutes[route.name] &&
                      "shadow-sm bg-slate-50 bg-opacity-30 "
                    }`}
                  >
                    <div
                      title={!isOpen && route.name?.toLowerCase()}
                      onClick={() => toggleRouteExpansion(route.name)}
                      className={`p-3 py-6 flex justify-between whitespace-nowrap items-center rounded-[10px] ease-in duration-150 hover:ease-in hover:bg-primary_color_hover hover:text-primary_color h-6 cursor-pointer`}
                    >
                      <div className="flex gap-4">
                        <div className="flex text-[20px]">
                          {route.icon || <TbChartAreaLine />}
                        </div>
                        <AnimatePresence>
                          {isOpen && (
                            <motion.div
                              variants={textAnimation}
                              initial={"hidden"}
                              animate={"show"}
                              exit={"hidden"}
                              className="flex whitespace-nowrap capitalize font-[400] text-[14px] tracking-wide"
                            >
                              {route.name}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                      {expandedRoutes[route.name] ? (
                        <BiChevronUp />
                      ) : (
                        <BiChevronDown />
                      )}
                    </div>
                    {route.children && expandedRoutes[route.name] && (
                      <ul>
                        {route.children.map((child, index) => (
                          <li key={index}>
                            <NavLink
                              title={!isOpen && child.name?.toLowerCase()}
                              to={child.path}
                              onClick={() => {
                                toggleRouteExpansion(
                                  expandedRoutes[route.name]
                                );
                                onToggleSidebar();
                              }}
                              className={({ isActive }) =>
                                `p-3 pl-8 py-6 flex justify-between rounded-[10px] whitespace-nowrap items-center ease-in duration-150 hover:ease-in hover:text-primary_color h-6 ${
                                  isActive &&
                                  "text-primary_color bg-primary_color_hover"
                                }`
                              }
                            >
                              <div className="flex gap-4">
                                <div className="flex text-[20px]">
                                  {child.icon || <TbChartAreaLine />}
                                </div>
                                <AnimatePresence>
                                  {isOpen && (
                                    <motion.div
                                      variants={textAnimation}
                                      initial={"hidden"}
                                      animate={"show"}
                                      exit={"hidden"}
                                      className="flex whitespace-nowrap capitalize font-[400] text-[14px] tracking-wide"
                                    >
                                      {child.name}
                                    </motion.div>
                                  )}
                                </AnimatePresence>
                              </div>
                            </NavLink>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                ) : (
                  <NavLink
                    title={!isOpen && route.name?.toLowerCase()}
                    key={index}
                    to={route.path}
                    onClick={onToggleSidebar}
                    className={({ isActive }) =>
                      `p-3 py-6 flex justify-between whitespace-nowrap items-center rounded-[10px] ease-in duration-150 hover:ease-in hover:bg-primary_color_hover hover:text-primary_color h-6 cursor-pointer ${
                        isActive && "bg-[#70BEFA33] text-[#70BEFA]"
                      }`
                    }
                  >
                    <div className="flex gap-4">
                      <div className="flex text-xl">
                        {route.icon || <TbChartAreaLine />}
                      </div>
                      <AnimatePresence>
                        {isOpen && (
                          <motion.div
                            variants={textAnimation}
                            initial={"hidden"}
                            animate={"show"}
                            exit={"hidden"}
                            className="flex whitespace-nowrap capitalize text-sm"
                          >
                            {route.name}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </NavLink>
                )
              )}
            </section>
            <h4
              className={`font-man text-[13px] ${
                isOpen ? " p-[1rem]" : "text-start"
              }  font-[600]`}
              title="Your Agent"
            >
              {!isOpen ? "Agent" : "Your Agent"}
            </h4>
            <section className="text-white">
              {routes.map((route, index) =>
                route.children ? (
                  <div
                    key={index}
                    className={`${
                      expandedRoutes[route.name] &&
                      "shadow-sm bg-slate-50 bg-opacity-30 "
                    }`}
                  >
                    <div
                      title={!isOpen && route.name?.toLowerCase()}
                      onClick={() => toggleRouteExpansion(route.name)}
                      className={`p-3 py-6 my-1 flex justify-between whitespace-nowrap items-center rounded-[10px] ease-in duration-150 hover:ease-in hover:bg-primary_color_hover hover:text-primary_color h-6 cursor-pointer`}
                    >
                      <div className="flex gap-4">
                        <div className="flex text-[20px]">
                          {route.icon || <TbChartAreaLine />}
                        </div>
                        <AnimatePresence>
                          {isOpen && (
                            <motion.div
                              variants={textAnimation}
                              initial={"hidden"}
                              animate={"show"}
                              exit={"hidden"}
                              className="flex whitespace-nowrap capitalize font-[400] text-[14px] tracking-wide"
                            >
                              {route.name}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                      {expandedRoutes[route.name] ? (
                        <BiChevronUp />
                      ) : (
                        <BiChevronDown />
                      )}
                    </div>
                    {route.children && expandedRoutes[route.name] && (
                      <ul>
                        {route.children.map((child, index) => (
                          <li key={index}>
                            <NavLink
                              title={!isOpen && child.name?.toLowerCase()}
                              to={child.path}
                              onClick={() => {
                                toggleRouteExpansion(
                                  expandedRoutes[route.name]
                                );
                                onToggleSidebar();
                              }}
                              className={({ isActive }) =>
                                `p-3 pl-8 py-6 flex justify-between rounded-[10px] whitespace-nowrap items-center ease-in duration-150 hover:ease-in hover:text-primary_color h-6 ${
                                  isActive &&
                                  "text-primary_color bg-primary_color_hover"
                                }`
                              }
                            >
                              <div className="flex gap-4">
                                <div className="flex text-[20px]">
                                  {child.icon || <TbChartAreaLine />}
                                </div>
                                <AnimatePresence>
                                  {isOpen && (
                                    <motion.div
                                      variants={textAnimation}
                                      initial={"hidden"}
                                      animate={"show"}
                                      exit={"hidden"}
                                      className="flex whitespace-nowrap capitalize font-[400] text-[14px] tracking-wide"
                                    >
                                      {child.name}
                                    </motion.div>
                                  )}
                                </AnimatePresence>
                              </div>
                            </NavLink>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                ) : (
                  <NavLink
                    title={!isOpen && route.name?.toLowerCase()}
                    key={index}
                    onClick={onToggleSidebar}
                    to={route.path}
                    className={({ isActive }) =>
                      `p-3 py-6 flex justify-between whitespace-nowrap items-center rounded-[10px] ease-in duration-150 hover:ease-in hover:bg-primary_color_hover hover:text-primary_color h-6 cursor-pointer ${
                        isActive && "bg-[#70BEFA33] text-[#70BEFA]"
                      }`
                    }
                  >
                    <div className="flex gap-4">
                      <div className="flex text-xl">
                        {route.icon || <TbChartAreaLine />}
                      </div>
                      <AnimatePresence>
                        {isOpen && (
                          <motion.div
                            variants={textAnimation}
                            initial={"hidden"}
                            animate={"show"}
                            exit={"hidden"}
                            className="flex whitespace-nowrap capitalize text-sm"
                          >
                            {route.name}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </NavLink>
                )
              )}
            </section>
            <h4
              className={`font-man text-[13px] ${
                isOpen ? " p-[1rem]" : "text-start"
              }  font-[600]`}
              title="Your Account"
            >
              {!isOpen ? "Account" : "Your Account"}
            </h4>
            <section className="text-white">
              {params.map((route, index) =>
                route.children ? (
                  <div
                    key={index}
                    className={`${
                      expandedRoutes[route.name] &&
                      "shadow-sm bg-slate-50 bg-opacity-30 "
                    }`}
                  >
                    <div
                      title={!isOpen && route.name?.toLowerCase()}
                      onClick={() => toggleRouteExpansion(route.name)}
                      className={`p-3 py-6 my-1 flex justify-between whitespace-nowrap items-center rounded-[10px] ease-in duration-150 hover:ease-in hover:bg-primary_color_hover hover:text-primary_color h-6 cursor-pointer`}
                    >
                      <div className="flex gap-4">
                        <div className="flex text-[20px]">
                          {route.icon || <TbChartAreaLine />}
                        </div>
                        <AnimatePresence>
                          {isOpen && (
                            <motion.div
                              variants={textAnimation}
                              initial={"hidden"}
                              animate={"show"}
                              exit={"hidden"}
                              className="flex whitespace-nowrap capitalize font-[400] text-[14px] tracking-wide"
                            >
                              {route.name}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                      {expandedRoutes[route.name] ? (
                        <BiChevronUp />
                      ) : (
                        <BiChevronDown />
                      )}
                    </div>
                    {route.children && expandedRoutes[route.name] && (
                      <ul>
                        {route.children.map((child, index) => (
                          <li key={index}>
                            <NavLink
                              title={!isOpen && child.name?.toLowerCase()}
                              to={child.path}
                              onClick={() => {
                                toggleRouteExpansion(
                                  expandedRoutes[route.name]
                                );
                                onToggleSidebar();
                              }}
                              className={({ isActive }) =>
                                `p-3 pl-8 py-6 flex justify-between rounded-[10px] whitespace-nowrap items-center ease-in duration-150 hover:ease-in hover:text-primary_color h-6 ${
                                  isActive &&
                                  "text-primary_color bg-primary_color_hover"
                                }`
                              }
                            >
                              <div className="flex gap-4">
                                <div className="flex text-[20px]">
                                  {child.icon || <TbChartAreaLine />}
                                </div>
                                <AnimatePresence>
                                  {isOpen && (
                                    <motion.div
                                      variants={textAnimation}
                                      initial={"hidden"}
                                      animate={"show"}
                                      exit={"hidden"}
                                      className="flex whitespace-nowrap capitalize font-[400] text-[14px] tracking-wide"
                                    >
                                      {child.name}
                                    </motion.div>
                                  )}
                                </AnimatePresence>
                              </div>
                            </NavLink>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                ) : (
                  <NavLink
                    title={!isOpen && route.name?.toLowerCase()}
                    key={index}
                    onClick={onToggleSidebar}
                    to={route.path}
                    className={({ isActive }) =>
                      `p-3 py-6 flex justify-between whitespace-nowrap items-center rounded-[10px] ease-in duration-150 hover:ease-in hover:bg-primary_color_hover hover:text-primary_color h-6 cursor-pointer ${
                        isActive && "bg-[#70BEFA33] text-[#70BEFA]"
                      }`
                    }
                  >
                    <div className="flex gap-4">
                      <div className="flex text-xl">
                        {route.icon || <TbChartAreaLine />}
                      </div>
                      <AnimatePresence>
                        {isOpen && (
                          <motion.div
                            variants={textAnimation}
                            initial={"hidden"}
                            animate={"show"}
                            exit={"hidden"}
                            className="flex whitespace-nowrap capitalize text-sm"
                          >
                            {route.name}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </NavLink>
                )
              )}
            </section>
            <h4
              className={`font-man text-[13px] ${
                isOpen ? " p-[1rem]" : "text-start"
              }  font-[600]`}
              title="Support"
            >
              Support
            </h4>
            <section className="text-white">
              {docs.map((route, index) =>
                route.children ? (
                  <div
                    key={index}
                    className={`${
                      expandedRoutes[route.name] &&
                      "shadow-sm bg-slate-50 bg-opacity-30 "
                    }`}
                  >
                    <div
                      title={!isOpen && route.name?.toLowerCase()}
                      onClick={() => toggleRouteExpansion(route.name)}
                      className={`p-3 py-6 my-1 flex justify-between whitespace-nowrap items-center rounded-[10px] ease-in duration-150 hover:ease-in hover:bg-primary_color_hover hover:text-primary_color h-6 cursor-pointer`}
                    >
                      <div className="flex gap-4">
                        <div className="flex text-[20px]">
                          {route.icon || <TbChartAreaLine />}
                        </div>
                        <AnimatePresence>
                          {isOpen && (
                            <motion.div
                              variants={textAnimation}
                              initial={"hidden"}
                              animate={"show"}
                              exit={"hidden"}
                              className="flex whitespace-nowrap capitalize font-[400] text-[14px] tracking-wide"
                            >
                              {route.name}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                      {expandedRoutes[route.name] ? (
                        <BiChevronUp />
                      ) : (
                        <BiChevronDown />
                      )}
                    </div>
                    {route.children && expandedRoutes[route.name] && (
                      <ul>
                        {route.children.map((child, index) => (
                          <li key={index}>
                            <NavLink
                              title={!isOpen && child.name?.toLowerCase()}
                              to={child.path}
                              onClick={() => {
                                toggleRouteExpansion(
                                  expandedRoutes[route.name]
                                );
                                onToggleSidebar();
                              }}
                              className={({ isActive }) =>
                                `p-3 pl-8 py-6 flex justify-between rounded-[10px] whitespace-nowrap items-center ease-in duration-150 hover:ease-in hover:text-primary_color h-6 ${
                                  isActive &&
                                  "text-primary_color bg-primary_color_hover"
                                }`
                              }
                            >
                              <div className="flex gap-4">
                                <div className="flex text-[20px]">
                                  {child.icon || <TbChartAreaLine />}
                                </div>
                                <AnimatePresence>
                                  {isOpen && (
                                    <motion.div
                                      variants={textAnimation}
                                      initial={"hidden"}
                                      animate={"show"}
                                      exit={"hidden"}
                                      className="flex whitespace-nowrap capitalize font-[400] text-[14px] tracking-wide"
                                    >
                                      {child.name}
                                    </motion.div>
                                  )}
                                </AnimatePresence>
                              </div>
                            </NavLink>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                ) : (
                  <NavLink
                    title={!isOpen && route.name?.toLowerCase()}
                    key={index}
                    onClick={onToggleSidebar}
                    to={route.path}
                    className={({ isActive }) =>
                      `p-3 py-6 flex justify-between whitespace-nowrap items-center rounded-[10px] ease-in duration-150 hover:ease-in hover:bg-primary_color_hover hover:text-primary_color h-6 cursor-pointer ${
                        isActive && "bg-[#70BEFA33] text-[#70BEFA]"
                      }`
                    }
                  >
                    <div className="flex gap-4">
                      <div className="flex text-xl">
                        {route.icon || <TbChartAreaLine />}
                      </div>
                      <AnimatePresence>
                        {isOpen && (
                          <motion.div
                            variants={textAnimation}
                            initial={"hidden"}
                            animate={"show"}
                            exit={"hidden"}
                            className="flex whitespace-nowrap capitalize text-sm"
                          >
                            {route.name}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </NavLink>
                )
              )}
            </section>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default SideBar;
