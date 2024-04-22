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

import { loader as toursLoader } from "../pages/Overview.jsx";
import { loader as tourLoader } from "../pages/Tour.jsx";
import { loader as userLoader } from "../pages/Home.jsx";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    loader: userLoader,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Overview />,
        loader: toursLoader,
      },
      {
        path: "tours/:slug",
        element: <Tour />,
        loader: tourLoader,
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
