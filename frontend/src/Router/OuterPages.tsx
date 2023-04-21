import React from "react";
import { Routes, Route } from "react-router-dom";
import { routerType } from "./Types.types";
import Home from "../Pages/Outer/Homepage";
import Members from "../Pages/Outer/Member";
import Login from "../Pages/Outer/Login";
import Dashboard from "../Pages/Dash/Dashboard";
import SearchDash from "../Pages/Dash/SearchDash";
import SingleGenre from "../components/SingleGenre";
import SingleConcert from "../Pages/Dash/SingleConcert";
import ComTest from "../Pages/Dash/ComTest";

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
    path: "SearchDash",
    element: <SearchDash />,
    title: "SearchDash",
  },
  {
    path: "SingleConcert",
    element: <SingleConcert />,
    title: "SingleConcert",
  },
  {
    path: "ComTest",
    element: <ComTest />,
    title: "ComTest",
  },


  {
    path: "SingleGenre",
    element: <SingleGenre title="a" image="a" description="a" color="a" />,
    title: "SingleGenre",
  },
];

const RouterM: React.FC = (): JSX.Element => {
  const pageRoutes = pagesData.map(({ path, element }: routerType) => (
    <Route key={path} path={`/${path}`} element={element} />
  ));

  return <Routes>{pageRoutes}</Routes>;
};

export default RouterM;
