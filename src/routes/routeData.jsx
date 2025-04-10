import React from "react";
import { RxDashboard } from "react-icons/rx";
import { HiOutlineRocketLaunch } from "react-icons/hi2";
import { LuCompass } from "react-icons/lu";
import { FiFolderMinus, FiFileText } from "react-icons/fi";
import { TbDeviceGamepad3 } from "react-icons/tb";
import { PiUserBold, PiWalletBold } from "react-icons/pi";







export const Dashboard = [
  {
    path: "deploy-an-agent",
    name: "Deploy an Agent ",
    icon: <HiOutlineRocketLaunch />,
  },
  {
    path: "agent-explorer",
    name: "Agent Explorer  ",
    icon: <LuCompass />,
  },
];

export const Routes = [
  {
    path: "dashboard",
    name: "Dashboard",
    icon: <RxDashboard />,
  },
  {
    path: "my-agents",
    name: "My Agents",
    icon: <FiFolderMinus />,
  },
  {
    path: "configurations",
    name: "Configurations",
    icon: <TbDeviceGamepad3 />,
  }
];

export const Parameters = [
  {
    path: "my-wallet",
    name: "My Wallet",
    icon: <PiWalletBold />,
  },
  {
    path: "profile",
    name: "Profile",
    icon: <PiUserBold />,
  },
];

export const Documentation = [
  {
    path: "documentation",
    name: "Documentation",
    icon: <FiFileText />,
  },
];
