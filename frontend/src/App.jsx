import { ThemeProvider } from "styled-components";
import { theme } from "./theme/theme.jsx";
import { GlobalStyle } from "./theme/GlobalStyle.jsx";
import "../public/styled.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { HomeLayout, Overview } from "./pages/index.js";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    children: [
      {
        index: true,
        element: <Overview />,
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
