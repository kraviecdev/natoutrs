import { Outlet, useLoaderData, useLocation } from "react-router-dom";
import customFetch from "../utils/customFetch.js";
import Header from "../components/Header/index.jsx";
import Footer from "../components/Footer/index.jsx";
import { useEffect } from "react";

export const loader = async () => {
  try {
    const { data } = await customFetch.get("/users/me");
    return data;
  } catch (error) {
    return error;
  }
};

const Home = () => {
  const { pathname } = useLocation();

  const { data } = useLoaderData();
  const logout = async () => {
    const { status } = await customFetch.get("/users/logout");

    if (status === 200) {
      window.location.reload();
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      <Header data={data} logout={logout} />
      <Outlet context={data} />
      <Footer />
    </>
  );
};

export default Home;
