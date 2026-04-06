import { createRoot } from "react-dom/client";
import { StrictMode } from "react";
import { createBrowserRouter, RouterProvider } from "react-router";
// import { data } from "react-router";
import App from "./App";
import "./index.css";
import AppErrorBoundary from "./AppErrorBoundary";

const router = createBrowserRouter([
  { id: "dataRoot",
    path: "/", 
    Component: App,
    // loader: async () => {
    //     const projsResponse = await fetch("http://localhost:8080/api/projects?page=1&size=3");
    //     if (!projsResponse.ok) {
    //       throw data(`Failed to fetch projects: ${projsResponse.status} ${projsResponse.statusText}`);
    //     }

    //     const postsResponse = await fetch("http://localhost:8080/api/posts?page=0&size=3");
    //     if (!postsResponse.ok) {
    //       throw data(`Failed to fetch posts: ${postsResponse.status} ${postsResponse.statusText}`);
    //     }

    //     const projs = await projsResponse.json();
    //     const posts = await postsResponse.json();

    //     return { projs, posts };
    // },
    ErrorBoundary: AppErrorBoundary,
  }
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);