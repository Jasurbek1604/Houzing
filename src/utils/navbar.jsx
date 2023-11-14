import HomePage from "../pages/Home";
import PropertiesPage from "../pages/Properties";

export const navbar = [
  {
    id: 1,
    element: <HomePage />,
    title: "Home",
    path: "/home",
    private: false,
    hidden: false,
  },
  {
    id: 2,
    element: <PropertiesPage />,
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