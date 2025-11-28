import { createBrowserRouter, NavLink, useRouteError } from "react-router-dom";
import Dashboard from "./Components/Pages/Dashboard/Dashboard";
import Login from "./Components/Pages/Login/Login";
import PrivateRoutes from "./Components/hoc/PrivateRoutes";
import concat from "lodash/concat";
import AppWrapper from "./AppWrapper";
import NewHcp from "./Components/Pages/HCP/NewHcp";
import Reports from "./Components/Pages/Reports/Reports";
import DrugExplorer from "./Components/Pages/DrugExplo/DrugExplorer";
import Overview from "./Components/Pages/Overview/Overview";

const hcpRouters = [
  {
    handle: {
      crumb: () => (
        <NavLink to="/hcp" className="breadcrumb-link">
          HCP
        </NavLink>
      ),
      activeMenuId: "hcp",
    },
    children: [
      {
        path: "/hcp",
        element: <NewHcp />,
      },
    ],
  },
];

const ReportRouter = [
  {
    path: "/reports",
    handle: {
      crumb: () => (
        <NavLink to="/reports" className="breadcrumb-link">
          Reports
        </NavLink>
      ),
      activeMenuId: "reports",
    },
    children: [
      {
        index: true,
        element: <Reports />,
      },
    ],
  },
];

const OverviewRouter = [
  {
    path: "/overview",
    handle: {
      crumb: () => (
        <NavLink to="/overview" className="breadcrumb-link">
          Overview
        </NavLink>
      ),
      activeMenuId: "overview",
    },
    children: [
      {
        index: true,
        element: <Overview />,
      },
    ],
  },
];

const DashBoardRouter = [
  {
    path: "/dashboard",
    handle: {
      crumb: () => (
        <NavLink to="/dashboard" className="breadcrumb-link">
          Dashboard
        </NavLink>
      ),
      activeMenuId: "dashboard",
    },
    children: [
      {
        index: true,
        element: <Dashboard />,
      },
    ],
  },
];

const DrugExplorerRouter = [
  {
    path: "/drugexplorer",
    handle: {
      crumb: () => (
        <NavLink to="/drugexplorer" className="breadcrumb-link">
          DrugExplorer
        </NavLink>
      ),
      activeMenuId: "drugexplorer",
    },
    children: [
      {
        index: true,
        element: <DrugExplorer />,
      },
    ],
  },
];

export const router = createBrowserRouter(
  [
    // Public Routes
    {
      path: "/",
      element: (
        <>
          <AppWrapper /> {/* ✅ Now inside Router context */}
          <Login />
        </>
      ),
    },

    {
      element: <PrivateRoutes />,
      children: [
        {
          element: "",
          children: concat(
            ReportRouter,
            OverviewRouter,
            DashBoardRouter,
            DrugExplorerRouter
          ),
          errorElement: <ErrorBoundary />,
        },
      ],
    },
  ],
  { basename: "/" }
);

function ErrorBoundary() {
  let error = useRouteError();
  console.error(error);
  // Uncaught ReferenceError: path is not defined
  return <div></div>;
}

export default router;
