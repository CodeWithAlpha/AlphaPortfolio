import { Navigate, useRoutes } from "react-router-dom";
//
import { HomePage } from "./elements";
import DashboardLayout from "../components/Layout/DashboardLayout";

// ----------------------------------------------------------------------

export default function Router() {
  return useRoutes([
    {
      path: "/",
      children: [
        {
          path: "/",
          element: <DashboardLayout />,
          children: [
            { element: <Navigate to={"home"} replace />, index: true },
            { path: "home", element: <HomePage /> },
          ],
        },
        // { path: "*", element: <Navigate to="/404" replace /> },
      ],
    },
  ]);
}
