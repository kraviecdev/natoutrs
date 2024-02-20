import Footer from "../components/Footer/index.jsx";
import Header from "../components/Header/index.jsx";
import { Outlet, redirect, useLoaderData } from "react-router-dom";
import customFetch from "../utils/customFetch.js";
import { toast } from "react-toastify";
import { createContext, useContext } from "react";

export const loader = async () => {
  try {
    const { data } = await customFetch.get("/users/me");
    return data;
  } catch (error) {
    return error;
  }
};

const UserContext = createContext();
const Home = () => {
  const { data } = useLoaderData();

  const logout = async () => {
    await customFetch.get("/users/logout");
    toast.success("Logged out.");
    redirect("/");
    window.location.reload();
  };

  return (
    <UserContext.Provider value={data}>
      <Header user={data} logout={logout} />
      <Outlet />
      <Footer />
    </UserContext.Provider>
  );
};

export const useUserContext = () => useContext(UserContext);
export default Home;
