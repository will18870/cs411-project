import React from "react";
import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import Routes from "./Router/Routes";
// import {createRoot} from 'react-dom/client';
//
// createRoot(document.getElementById('root')).render(<BrowserRouter>
//     <Routes/>
// </BrowserRouter>);


ReactDOM.render(
    <BrowserRouter>
        <Routes/>
    </BrowserRouter>,
    document.getElementById("root")
);
