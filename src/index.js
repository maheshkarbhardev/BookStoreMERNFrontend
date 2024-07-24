import React from "react";
import ReactDOM from "react-dom/client";
// import App from './App';
import { RouterProvider } from "react-router-dom";
import "./index.css";
import router from "./routers/router.jsx";
import AuthProvider from "./contects/AuthProvider.jsx";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
