import React from "react";
import {Routes, Route } from "react-router-dom";
import { routerType } from "../types/router.types";
import Home from "../Pages/Homepage";
import ConcertPage from "../Pages/ConcertPage";
import Members from "../Pages/Member";
import Login from "../Pages/Login";
import Dashboard from "../Pages/Dashboard";
import Search from "../Pages/Search";

const pagesData: routerType[] = [
  {
    path: "",
    element: <Home />,
    title: "Home",
  },
  {
    path: "Concert",
    element: <ConcertPage />,
    title: "Concert",
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
