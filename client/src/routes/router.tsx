import { type RouteObject } from "react-router";
import Root from "@/layout/Root";
import Home from "@/pages/Home";
import About from "@/pages/About";
import Products from "@/pages/Products";
import Product from "@/pages/Product";
import Login from "@/pages/Login";
import Register from "@/pages/Register";
import NotFound from "@/pages/NotFound";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <Root />,
    children: [
      { path: "/", Component: Home },
      { path: "/about", Component: About },
      { path: "/products", Component: Products },
      { path: "/product/:slug", Component: Product },
    ],
  },
  { path: "/login", Component: Login },
  { path: "/register", Component: Register },
  { path: "*", Component: NotFound },
];

export default routes;
