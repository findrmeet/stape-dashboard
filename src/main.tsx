import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import UrlTabs from "./components/UrlTabs.tsx";
import Layout from "./layout/Layout.tsx";

const router = createBrowserRouter([
{
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <UrlTabs />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />,
  </StrictMode>
);
