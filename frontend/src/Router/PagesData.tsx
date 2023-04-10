import React from "react";
import {Routes, Route } from "react-router-dom";
import { routerType } from "../types/router.types";
import Home from "../Pages/Homepage";
import ConcertPage from "../Pages/ConcertPage";
// import Members from "../Pages/Members";
// import Login from "../Pages/Login";
// import Spotify from "../Pages/Spotify";

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
  }
//   {
//     path: "Login",
//     element: <Login />,
//     title: "Login",
//   },
//   {
//     path: "Members",
//     element: <Members />,
//     title: "Members",
//   },
//   {
//     path: "Spotify",
//     element: <Spotify />,
//     title: "Spotify",
//   },
];

const App: React.FC = (): JSX.Element => {
  const pageRoutes = pagesData.map(({ path, element }: routerType) => (
    <Route key={path} path={`/${path}`} element={element} />
  ));

  return <Routes>{pageRoutes}</Routes>;
};

export default App;
