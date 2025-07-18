import { createBrowserRouter, RouterProvider } from "react-router";
import routes from "./router";

const router = createBrowserRouter(routes);

const AppRouter = () => <RouterProvider router={router} />;

export default AppRouter;
