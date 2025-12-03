import { createBrowserRouter } from "react-router-dom";

import { RootLayout } from "@/layouts/root-layout";
import { HomePage } from "@/pages/home";
import { LoginPage } from "@/pages/login";
import { DashboardPage, dashboardLoader } from "@/pages/dashboard";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "login",
        element: <LoginPage />,
      },
      {
        path: "dashboard",
        element: <DashboardPage />,
        loader: dashboardLoader,
      },
    ],
  },
]);

