import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "@/layout/DashboardLayout";
import CRMDashboard from "@/pages/CRMDashboard";
import FinanceDashboard from "@/pages/FinanceDashboard";
import AnalyticsDashboard from "@/pages/AnalyticsDashboard";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <DashboardLayout />,       // Sidebar + Topbar always visible
    children: [
      { index: true,       element: <CRMDashboard /> },        // route: /
      { path: "finance",   element: <FinanceDashboard /> },    // route: /finance
      { path: "analytics", element: <AnalyticsDashboard /> },  // route: /analytics
    ],
  },
]);
