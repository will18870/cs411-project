import React from "react";
import { Routes, Route } from "react-router-dom";
import { routerType } from "../Router/Types.types";
import Recommend from "../components/Recommend";
// import CategoryPage from "../Pages/Dash/CategoryPage";
import SearchDash from "../Pages/Dash/SearchDash";
import SingleConcert from "../Pages/Dash/SingleConcert";
import Footer from '../components/Footer';
// import SingleGenre from "../components/SingleGenre";

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
  }
];

const Dash: React.FC = (): JSX.Element => {
  const pageRoutes = pagesData.map(({ path, element }: routerType) => (
    <Route key={path} path={`/${path}`} element={element} />
  ));

  return (
    <div>
      <Routes>{pageRoutes}</Routes>
    </div>
   
  );
};

export default Dash;
