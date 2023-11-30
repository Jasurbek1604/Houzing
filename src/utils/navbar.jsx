import React from "react";
const PropertiesPage = React.lazy(() => import("../pages/Properties"));
const HomePage = React.lazy(() => import("../pages/Home"));

export const navbar = [
  {
    id: 1,
    element: (
      <React.Suspense fallback={"loading..."}>
        <HomePage />
      </React.Suspense>
    ),
    title: "Home",
    path: "/home",
    private: false,
    hidden: false,
  },
  {
    id: 2,
    element: (
      <React.Suspense fallback={"loading..."}>
        <PropertiesPage />
      </React.Suspense>
    ),
    title: "Properties",
    path: "/properties",
    private: false,
    hidden: false,
  },
  {
    id: 3,
    element: <h1>SignIN</h1>,
    title: "SignIn",
    path: "/signin",
    private: false,
    hidden: true,
  },
  {
    id: 4,
    element: <h1>SignUp</h1>,
    title: "SignUp",
    path: "/signup",
    private: false,
    hidden: true,
  },
];
