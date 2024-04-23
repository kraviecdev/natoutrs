import { createBrowserRouter } from "react-router-dom";
import {
  Error,
  ForgotPass,
  Home,
  Login,
  Overview,
  ResetPass,
  Signup,
  Tour,
} from "../pages/index.js";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Overview />,
      },
      {
        path: "tours/:slug",
        element: <Tour />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "signup",
        element: <Signup />,
      },
      {
        path: "forgot-pass",
        element: <ForgotPass />,
      },
      {
        path: "reset-pass/:token",
        element: <ResetPass />,
      },
    ],
  },
]);
