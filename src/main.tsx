import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";

import { Routes, Route, BrowserRouter } from "react-router-dom";

import Root from "./routes/Root";
import Characters from "./views/Characters";
import Character from "./views/Character";
import Episodes from "./views/Episodes";

const queryClient = new QueryClient();

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Root />,
//     errorElement: <h1>404</h1>,
//     children: [
//       {
//         path: "/characters",
//         element: <Characters />,
//       },
//       {
//         path: "/episodes",
//         element: <Episodes />,
//       },
//     ],
//   },
//   {
//     path: "/character/:id",
//     element: <Character />,
//   },
// ]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      {/* <RouterProvider router={router} /> */}
      <BrowserRouter>
        <Routes>
          <Route element={<Root />}>
            <Route index path="characters" element={<Characters />} />
            <Route path="episodes" element={<Episodes />} />
            <Route path="character/:id" element={<Character />} />
            <Route path="*" element={<Navigate replace to="/characters" />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  </React.StrictMode>
);
