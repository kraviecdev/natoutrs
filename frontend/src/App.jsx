import { ThemeProvider } from "styled-components";
import { theme } from "./theme/theme.jsx";
import { GlobalStyle } from "./theme/GlobalStyle.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home, Login, Overview, Tour } from "./pages/index.js";

import { loader as allToursLoader } from "./pages/Overview.jsx";
import { loader as tourLoader } from "./pages/Tour.jsx";
import { action as loginAction } from "./pages/Login.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
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
