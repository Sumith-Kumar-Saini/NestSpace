import Root from "@/layout/Root";
import Home from "@/pages/Home";
import { type RouteObject } from "react-router";

const routes: RouteObject[] = [
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: "/about", element: "coming soon..." },
      { path: "/products", element: "coming soon..." },
      { path: "/product/:id", element: "coming soon..." },

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
