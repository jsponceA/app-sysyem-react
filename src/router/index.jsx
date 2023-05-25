import { redirect, useRoutes, Navigate } from "react-router-dom";
import Login from "../pages/auth/Login";
import Layout from "../pages/Layout";
import HomeIndex from "../pages/home/Index";
import UsersIndex from "../pages/users/Index";
import ProductsIndex from "../pages/products/Index";

const Router = () => {
  let listRoutes = useRoutes([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/login",
      element: <Login />,
    },

    {
      path: "/home",
      element: <Layout />,
      children: [
        {
          path: "/home",
          element: <HomeIndex />,
        },
        {
          path: "/users",
          element: <UsersIndex />,
        },
        {
          path: "/products",
          element: <ProductsIndex />,
        },
      ],
    },
  ]);
  return listRoutes;
};

export default Router;
