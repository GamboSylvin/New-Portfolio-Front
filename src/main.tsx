import { createRoot } from "react-dom/client";
import { StrictMode } from "react";
import { createBrowserRouter, RouterProvider } from "react-router";
import App from "./App";
import "./index.css";

const router = createBrowserRouter([
  { id: "dataRoot",
    path: "/", 
    Component: App,
    loader: async () => {
      // Simulate fetching data from an API
      const response = await fetch("http://localhost:8080/api/projects?page=0&size=1");
      const projects = await response.json();
      return projects;
    }
}]);


createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);