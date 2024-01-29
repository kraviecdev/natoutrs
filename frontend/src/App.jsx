import { ThemeProvider } from "styled-components";
import { theme } from "./theme/theme.jsx";
import { GlobalStyle } from "./theme/GlobalStyle.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Error, Home, Login, Overview, Signup, Tour } from "./pages/index.js";

import { loader as allToursLoader } from "./pages/Overview.jsx";
import { loader as tourLoader } from "./pages/Tour.jsx";
import { loader as user } from "./pages/Home.jsx";
import { action as loginAction } from "./pages/Login.jsx";
import { action as signupAction } from "./pages/Signup.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    loader: user,
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
