import React from "react";
import { Routes, Route } from "react-router-dom";
import { routerType } from "../Router/Types.types";
import Recommend from "../components/Recommend";
import SearchDash from "../Pages/Dash/SearchDash";
import SingleConcert from "../Pages/Dash/SingleConcert";
import Favourite from "../Pages/Dash/Favourite";


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
    path: "/SingleConcert", 
    element: <SingleConcert />,
    title: "SingleConcert",
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

  return (<Routes>{pageRoutes}</Routes> );
};

export default Dash;
