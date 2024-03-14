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
  Settings,
  ChangePass,
  MyReviews,
  AllReviews,
  AllTours,
  AllUsers,
} from "../pages/index.js";

import { loader as toursLoader } from "../pages/Overview.jsx";
import { loader as tourLoader } from "../pages/Tour.jsx";
import { loader as userLoader } from "../pages/Home.jsx";
import { loader as myReviewsLoader } from "../pages/MyReviews.jsx";
import { loader as allReviewsLoader } from "../pages/AllReviews.jsx";
import { loader as allToursLoader } from "../pages/AllTours.jsx";
import { loader as allUsersLoader } from "../pages/AllUsers.jsx";

import { action as loginAction } from "../pages/Login.jsx";
import { action as signupAction } from "../pages/Signup.jsx";
import { action as forgotPass } from "../pages/ForgotPass.jsx";
import { action as resetPass } from "../pages/ResetPass.jsx";
import { action as updateUserData } from "../pages/Settings.jsx";
import { action as updateUserPass } from "../pages/ChangePass.jsx";

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
        children: [
          {
            path: "settings",
            element: <Settings />,
            action: updateUserData,
          },
          {
            path: "pass-change",
            element: <ChangePass />,
            action: updateUserPass,
          },
          {
            path: "my-reviews",
            element: <MyReviews />,
            loader: myReviewsLoader,
          },
          {
            path: "manage-reviews",
            element: <AllReviews />,
            loader: allReviewsLoader,
          },
          {
            path: "manage-tours",
            element: <AllTours />,
            loader: allToursLoader,
          },
          {
            path: "manage-users",
            element: <AllUsers />,
            loader: allUsersLoader,
          },
        ],
      },
    ],
  },
]);
