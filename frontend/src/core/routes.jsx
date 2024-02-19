import { createBrowserRouter } from "react-router-dom";
import {
  Error,
  ForgotPass,
  ResetPass,
  Home,
  Login,
  Overview,
  Signup,
  Tour,
  Account,
} from "../pages/index.js";

import { loader as allToursLoader } from "../pages/Overview.jsx";
import { loader as tourLoader } from "../pages/Tour.jsx";
import { action as loginAction } from "../pages/Login.jsx";
import { action as signupAction } from "../pages/Signup.jsx";
import { action as forgotPass } from "../pages/ForgotPass.jsx";
import { action as resetPass } from "../pages/ResetPass.jsx";
import { loader as userLoader } from "../pages/Account.jsx";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Overview />,
        loader: allToursLoader,
      },
      {
        path: "tours/:slug",
        element: <Tour />,
        loader: tourLoader,
      },
      {
        path: "login",
        element: <Login />,
        action: loginAction,
      },
      {
        path: "signup",
        element: <Signup />,
        action: signupAction,
      },
      {
        path: "forgot-pass",
        element: <ForgotPass />,
        action: forgotPass,
      },
      {
        path: "reset-pass/:token",
        element: <ResetPass />,
        action: resetPass,
      },
      {
        path: "me",
        element: <Account />,
        loader: userLoader,
        children: [
          {
            path: "settings",
          },
        ],
      },
    ],
  },
]);
