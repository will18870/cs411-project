import React from "react";
import { Routes, Route } from "react-router-dom";
import { routerType } from "../types/router.types";
import Dashboard from "../Pages/Dash/Dashboard";
import Search from "../Pages/Dash/Search";

const pagesData: routerType[] = [
  {
    path: "Dashboard", 
    element: <Dashboard />,
    title: "Dashboard",
  },
  {
    path: "search", 
    element: <Search />,
    title: "Search",
  },
];

const Dash: React.FC = (): JSX.Element => {
  const pageRoutes = pagesData.map(({ path, element }: routerType) => (
    <Route key={path} path={`/${path}`} element={element} />
  ));

  return <Routes>{pageRoutes}</Routes>;
};

export default Dash;
