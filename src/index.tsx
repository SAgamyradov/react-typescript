import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
<<<<<<< HEAD
import "./assets/css/tailwind.css";
// import reportWebVitals from "./reportWebVitals";
=======
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import "./assets/css/index.css";
import Loader from "./components/Loader/Loader";
import WebRoutes from "./routes/WebRoutes";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    
          <WebRoutes />
       
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
