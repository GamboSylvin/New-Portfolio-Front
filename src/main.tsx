import { createRoot } from "react-dom/client";
import { StrictMode } from "react";
import { createBrowserRouter, RouterProvider } from "react-router";
import App from "./App";
import "./index.css";

const router = createBrowserRouter([
  { path: "/", 
    Component: App,
    // loader: async () => {
    //   // Simulate fetching data from an API
    //   const response = await fetch("localhost:8080/api/projects");
    //   const projects = await response.json();
    //   return { projects };
    // }
}]);


createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);