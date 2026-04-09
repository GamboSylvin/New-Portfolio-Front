import { createRoot } from "react-dom/client";
import { StrictMode } from "react";
import { createBrowserRouter, RouterProvider } from "react-router";
import { data } from "react-router";
import App from "./App";
import "./index.css";
import AppErrorBoundary from "./AppErrorBoundary";

const router = createBrowserRouter([
  { id: "dataRoot",
    path: "/", 
    Component: App,
    loader: async () => {
        const projsResponse = await fetch("https://blog-backend-production-4780.up.railway.app/api/projects?page=0&size=3");
        if (!projsResponse.ok) {
          throw data(`Failed to fetch projects: ${projsResponse.status} ${projsResponse.statusText}`);
        }
        console.log("Projects response status:", projsResponse.status);

    //     const postsResponse = await fetch("http://localhost:8080/api/posts?page=0&size=3");
    //     if (!postsResponse.ok) {
    //       throw data(`Failed to fetch posts: ${postsResponse.status} ${postsResponse.statusText}`);
    //     }

        const projs = await projsResponse.json();
        console.log("Fetched projects:", projs);
    //     const posts = await postsResponse.json();

        return { projs };
    },
    ErrorBoundary: AppErrorBoundary,
  }
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);