import Footer from "../components/Footer/index.jsx";
import Header from "../components/Header/index.jsx";
import { Outlet } from "react-router-dom";

const Home = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default Home;
