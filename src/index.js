import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import HomeProvider from "./lib/context/home/HomeProvider";
ReactDOM.render(
  <React.StrictMode>
    <HomeProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </HomeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
