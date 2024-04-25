import { createBrowserRouter } from "react-router-dom";
import {
  AllTours,
  Error,
  ForgotPass,
  Home,
  Login,
  ResetPass,
  Signup,
  TourDetailsPage,
} from "../pages/index.js";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <AllTours />,
      },
      {
        path: "tour/:slug",
        element: <TourDetailsPage />,
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
