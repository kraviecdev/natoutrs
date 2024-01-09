import { ThemeProvider } from "styled-components";
import { theme } from "./theme/theme.jsx";
import { GlobalStyle } from "./theme/GlobalStyle.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {
  HomeLayout,
  LoginScreen,
  Overview,
  TourDetails,
} from "./pages/index.js";

import { action as loginAction } from "./pages/LoginScreen.jsx";
import { loader as userLoader } from "./pages/HomeLayout.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    loader: userLoader,
    children: [
      {
        index: true,
        element: <Overview />,
      },
      {
        path: "tours/:slug",
        element: <TourDetails />,
      },
      {
        path: "login",
        element: <LoginScreen />,
        action: loginAction,
      },
    ],
  },
]);

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <RouterProvider router={router} />
    </ThemeProvider>
  );
};

export default App;
