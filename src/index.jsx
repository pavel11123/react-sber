import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
// import App from "./components/App/App";
import Product from "./components/Page/Product/Product";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <Product />
  </React.StrictMode>
);
