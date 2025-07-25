import { lazy, Suspense, type JSX } from "react";
import Root from "@/layout/Root";
import { type RouteObject } from "react-router";

// Lazy-loaded components
const Home = lazy(() => import("@/pages/Home"));
const About = lazy(() => import("@/pages/About"));
const Products = lazy(() => import("@/pages/Products"));
const Product = lazy(() => import("@/pages/Product"));
const Login = lazy(() => import("@/pages/Login"));
const Register = lazy(() => import("@/pages/Register"));
const NotFound = lazy(() => import("@/pages/NotFound"));

// Suspense wrapper
const withSuspense = (
  Component: React.LazyExoticComponent<() => JSX.Element>
) => (
  <Suspense fallback={<div>Loading...</div>}>
    <Component />
  </Suspense>
);

const routes: RouteObject[] = [
  {
    path: "/",
    element: <Root />,
    children: [
      { path: "/", element: withSuspense(Home) },
      { path: "/about", element: withSuspense(About) },
      { path: "/products", element: withSuspense(Products) },
      { path: "/product/:slug", element: withSuspense(Product) },
    ],
  },
  { path: "/login", element: withSuspense(Login) },
  { path: "/register", element: withSuspense(Register) },
  { path: "*", element: withSuspense(NotFound) },
];

export default routes;
