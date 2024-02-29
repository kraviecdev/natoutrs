import { Outlet, useLoaderData } from "react-router-dom";
import { toast } from "react-toastify";
import customFetch from "../utils/customFetch.js";
import Header from "../components/Header/index.jsx";
import Footer from "../components/Footer/index.jsx";

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
    const { status } = await customFetch.get("/users/logout");

    if (status === 200) {
      toast.success("Logged out");
    }
  };

  return (
    <>
      <Header data={data} logout={logout} />
      <Outlet context={data} />
      <Footer />
    </>
  );
};

export default Home;
