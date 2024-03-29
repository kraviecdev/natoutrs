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
  ManageUser,
  ManageReview,
  ManageTour,
} from "../pages/index.js";

import { loader as toursLoader } from "../pages/Overview.jsx";
import { loader as tourLoader } from "../pages/Tour.jsx";
import { loader as userLoader } from "../pages/Home.jsx";
import { loader as myReviewsLoader } from "../pages/MyReviews.jsx";
import { loader as allReviewsLoader } from "../pages/AllReviews.jsx";
import { loader as allToursLoader } from "../pages/AllTours.jsx";
import { loader as allUsersLoader } from "../pages/AllUsers.jsx";
import { loader as manageReviewLoader } from "../pages/ManageReview.jsx";
import { loader as manageTourLoader } from "../pages/ManageTour.jsx";
import { loader as manageUserLoader } from "../pages/ManageUser.jsx";

import { action as loginAction } from "../pages/Login.jsx";
import { action as signupAction } from "../pages/Signup.jsx";
import { action as forgotPass } from "../pages/ForgotPass.jsx";
import { action as resetPass } from "../pages/ResetPass.jsx";
import { action as updateUserData } from "../pages/Settings.jsx";
import { action as updateUserPass } from "../pages/ChangePass.jsx";
import { action as updateReview } from "../pages/ManageReview.jsx";
import { action as updateTour } from "../pages/ManageTour.jsx";
import { action as updateUser } from "../pages/ManageUser.jsx";
import { action as deleteAction } from "../pages/Delete.jsx";

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
        path: "settings",
        element: <Account />,
        children: [
          {
            index: true,
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
          {
            path: "manage-review/:id",
            element: <ManageReview />,
            loader: manageReviewLoader,
            action: updateReview,
          },
          {
            path: "manage-tour/:id",
            element: <ManageTour />,
            loader: manageTourLoader,
            action: updateTour,
          },
          {
            path: "manage-user/:id",
            element: <ManageUser />,
            loader: manageUserLoader,
            action: updateUser,
          },
          {
            path: ":pathname/delete/:id",
            action: deleteAction,
          },
        ],
      },
    ],
  },
]);
