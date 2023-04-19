import React from "react";
import { Routes, Route } from "react-router-dom";
import { routerType } from "../types/router.types";
import Dashboard from "../Pages/Dash/Dashboard";
import SearchDash from "../Pages/Dash/SearchDash";

const pagesData: routerType[] = [
  {
    path: "/Dashboard", 
    element: <Dashboard />,
    title: "Dashboard",
  },
  {
    path: "/searchDash", 
    element: <SearchDash />,
    title: "SearchDash",
  }
];

const Dash: React.FC = (): JSX.Element => {
  const pageRoutes = pagesData.map(({ path, element }: routerType) => (
    <Route key={path} path={`/${path}`} element={element} />
  ));

  return <Routes>{pageRoutes}</Routes>;
};

export default Dash;
