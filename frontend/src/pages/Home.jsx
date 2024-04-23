import { Outlet, useLocation } from "react-router-dom";
import Header from "../components/Header/index.jsx";
import Footer from "../components/Footer/index.jsx";
import { useEffect } from "react";

const Home = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default Home;
