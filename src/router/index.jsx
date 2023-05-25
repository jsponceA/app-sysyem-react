import { redirect, useRoutes, Navigate } from "react-router-dom";
import Login from "../pages/auth/Login";
import Layout from "../pages/Layout";
import HomeIndex from "../pages/home/Index";
import UsersIndex from "../pages/users/Index";
import UsersCreate from "../pages/users/Create";
import UsersEdit from "../pages/users/Edit";
import ProductsIndex from "../pages/products/Index";

const Router = () => {
  let listRoutes = useRoutes([
    {
      path: "/",
      element: <Navigate to="/login" replace />,
    },
    {
      path: "/login",
      element: <Login />,
    },

    {
      path: "/dashboard",
      element: <Layout />,
      children: [
        {
          path: "",
          element: <Navigate to="home" replace />,
        },
        {
          path: "home",
          element: <HomeIndex />,
        },
        {
          path: "users",
          element: <UsersIndex />,
        },
        {
          path: "users/create",
          element: <UsersCreate />,
        },
        {
          path: "users/:id/edit",
          element: <UsersEdit />,
        },
        {
          path: "products",
          element: <ProductsIndex />,
        },
      ],
    },
  ]);
  return listRoutes;
};

export default Router;
