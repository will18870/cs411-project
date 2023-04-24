import React from "react";
import { Routes, Route } from "react-router-dom";
import { routerType } from "./Types.types";
import Home from "../Pages/Outer/Homepage";
import Members from "../Pages/Outer/Member";
import Login from "../Pages/Outer/Login";
import Dashboard from "../Pages/Dash/Dashboard";


const pagesData: routerType[] = [
  {
    path: "/",
    element: <Home />,
    title: "Home",
  },
  {
    path: "callback",
    element: <Home />,
    title: "Home",
  },
  {
    path: "Login",
    element: <Login />,
    title: "Login",
  },
  {
    path: "Members",
    element: <Members />,
    title: "Members",
  },
  {
    path: "Dash/*",
    element: <Dashboard />,
    title: "Dash",
  }
];

const RouterM: React.FC = (): JSX.Element => {
  const pageRoutes = pagesData.map(({ path, element }: routerType) => (
    <Route key={path} path={`/${path}`} element={element} />
  ));

  return <Routes>{pageRoutes}</Routes>;
};

export default RouterM;
