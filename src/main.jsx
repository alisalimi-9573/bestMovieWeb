import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
("react-router-dom");
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./router";

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
