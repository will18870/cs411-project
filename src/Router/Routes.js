import React from "react";
import {Route, Routes} from "react-router-dom";
import routerType from "../types/router.types";
import pagesData from "./PagesData";
import "../App.css"

function App() {
    const pageRoutes = pagesData.map(({path, title, element}: routerType) => {
        return <Route key={title} path={`/${path}`} element={element}/>;
    });

    return <Routes>{pageRoutes}</Routes>;
}

export default App;
