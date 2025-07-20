import Root from "@/layout/Root";
import About from "@/pages/About";
import Home from "@/pages/Home";
import Product from "@/pages/Product";
import Products from "@/pages/Products";
import { type RouteObject } from "react-router";

const routes: RouteObject[] = [
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: "/about", Component: About },
      { path: "/products", Component: Products },
      { path: "/product/:id", Component: Product },

      // Auth related
      { path: "/login", element: "coming soon..." },
      { path: "/register", element: "coming soon..." },
    ],
  },
  {
    path: "*",
    element: "404 Page not found",
  },
];

export default routes;
