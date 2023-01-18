import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Root from "./routes/Root";
import Characters from "./views/Characters";
import Character from "./views/Character";
import Episodes from "./views/Episodes";

const queryClient = new QueryClient();

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <h1>404</h1>,
    children: [
      {
        path: "/characters",
        element: <Characters />,
      },
      {
        path: "/episodes",
        element: <Episodes />,
      },
    ],
  },
  {
    path: "/character/:id",
    element: <Character />,
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </React.StrictMode>
);
