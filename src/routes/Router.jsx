import React from "react";
import { createBrowserRouter } from "react-router-dom";
import { AgentExplorer, Deploy, ErrorPage, LandingPage } from "../pages";
import Layout from "../layout/Layout";
import AppLayout from "../layout/AppLayout";

const routes = [
  {
    path: "/",
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Layout />,
        children: [{ index: true, element: <LandingPage /> }],
      },
      {
        path: "app",
        element: <AppLayout />,
        children: [
          { path: "dashboard", element: <LandingPage /> },
          { path: "deploy-an-agent", element: <Deploy /> },
          { path: "agent-explorer", element: <AgentExplorer /> },
        ],
      },
    ],
  },
];

const Router = createBrowserRouter(routes);

export default Router;
