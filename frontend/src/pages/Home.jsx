import Footer from "../components/Footer/index.jsx";
import Header from "../components/Header/index.jsx";
import { Outlet, useLoaderData } from "react-router-dom";
import customFetch from "../utils/customFetch.js";

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

  return (
    <>
      <Header data={data} />
      <Outlet context={data} />
      <Footer />
    </>
  );
};

export default Home;
