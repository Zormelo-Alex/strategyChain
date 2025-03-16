import React from "react";
import { createBrowserRouter } from "react-router-dom";
import { ErrorPage, LandingPage } from "../pages";
import Layout from "../layout/Layout";

const routes = [
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <LandingPage />,
      },
    ],
  },
];

const Router = createBrowserRouter(routes);

export default Router;
