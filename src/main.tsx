import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

// Import the layouts
import RootLayout from "./layouts/root-layout";
import DashboardLayout from "./layouts/dashboard-layout";

// Import the components
import ContactPage from "./pages/contact";
import SignInPage from "./pages/sign-in";
import SignUpPage from "./pages/sign-up";
import OrganizationCreate from "./pages/OrganizationCreate";
import OrganizationPage from "./pages/Organization";
import ManualMember from "./pages/ManualMember";

const router = createBrowserRouter([
  {
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <OrganizationPage />,
      },
      { path: "/contact", element: <ContactPage /> },
      { path: "/sign-in/*", element: <SignInPage /> },
      { path: "/sign-up/*", element: <SignUpPage /> },
      {
        element: <DashboardLayout />,
        path: "organisation",
        children: [
          { path: "/organisation", element: <OrganizationPage /> },
          { path: "/organisation/create", element: <OrganizationCreate /> },
        ],
      },
      {
        path: "/user",
        element: <ManualMember />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
