import React from "react";
import { Routes, Route } from "react-router-dom";
import { routerType } from "../Router/Types.types";
import Recommend from "../components/Recommend";
import SearchDash from "../Pages/Dash/SearchDash";
import SingleConcert from "../Pages/Dash/SingleConcert";
import Favourite from "../Pages/Dash/Favourite";
import SingleGenre from "../Pages/Dash/SingleGenre";

const pagesData: routerType[] = [
  {
    path: "/",
    element: <Recommend />,
    title: "Recommend",
  },
  {
    path: "/SearchDash",
    element: <SearchDash />,
    title: "Dash-SearchDash",
  },
  {
    path: "/Concert/:id",
    element: <SingleConcert/>,
    title: "Concert",
  },
  {
    path: "/genre/:title",
    element: <SingleGenre/>,
    title: "SingleGenre",
  },
  {
    path: "/Favourite",
    element: <Favourite />,
    title: "Favourite",
  }
];

const Dash: React.FC = (): JSX.Element => {
  const pageRoutes = pagesData.map(({ path, element }: routerType) => (
    <Route key={path} path={`/${path}`} element={element} />
  ));

  return (<Routes>
    {pageRoutes}</Routes>);
};

export default Dash;
