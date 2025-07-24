import Root from "@/layout/Root";
import About from "@/pages/About";
import Home from "@/pages/Home";
import Login from "@/pages/Login";
import Product from "@/pages/Product";
import Products from "@/pages/Products";
import Register from "@/pages/Register";
import { type RouteObject } from "react-router";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <Root />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/about", element: <About /> },
      { path: "/products", element: <Products /> },
      { path: "/product/:slug", element: <Product /> },
    ],
  },
  // Auth related
  { path: "/login", element: <Login /> },
  { path: "/register", element: <Register /> },
  {
    path: "*",
    element: "404 Page not found",
  },
];

export default routes;
