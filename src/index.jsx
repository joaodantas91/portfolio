import React from "react";
import { App } from "./app";
import "./index.css";

import { createRoot } from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Techs from "./pages/Techs";
import Projects from "./pages/Projects";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/techs",
        element: <Techs />
      },
      {
        path: "/projects",
        element: <Projects />
      }
    ]
  }
]);

const container = document.getElementById("root");
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(<React.StrictMode>

  <RouterProvider router={router} />
</React.StrictMode>);
