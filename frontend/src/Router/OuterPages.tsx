import React from "react";
import { Routes, Route } from "react-router-dom";
import { routerType } from "../types/router.types";
import Home from "../Pages/Outer/Homepage";
import Members from "../Pages/Outer/Member";
import Login from "../Pages/Outer/Login";
import Dashboard from "../Pages/Dash/Dashboard";
import Search from "../Pages/Dash/Search";

const pagesData: routerType[] = [
  {
    path: "",
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
    path: "Dashboard",
    element: <Dashboard />,
    title: "Dashboard",
  },
  {
    path: "search", // add the search path
    element: <Search />,
    title: "Search",
  },
];

const RouterM: React.FC = (): JSX.Element => {
  const pageRoutes = pagesData.map(({ path, element }: routerType) => (
    <Route key={path} path={`/${path}`} element={element} />
  ));

  return <Routes>{pageRoutes}</Routes>;
};

export default RouterM;
