import Footer from "../components/Footer/index.jsx";
import Header from "../components/Header/index.jsx";
import { Outlet, useLoaderData } from "react-router-dom";
import customFetch from "../utils/customFetch.js";
import { toast } from "react-toastify";

export const loader = async () => {
  try {
    const { data } = await customFetch.get("/users/me");
    return data;
  } catch (error) {
    return error;
  }
};

const Home = () => {
  const { data } = useLoaderData();

  const logout = async () => {
    await customFetch.get("/users/logout");
    toast.success("Logged out.");
    window.location.reload();
  };

  return (
    <>
      <Header user={data} logout={logout} />
      <Outlet />
      <Footer />
    </>
  );
};

export default Home;
