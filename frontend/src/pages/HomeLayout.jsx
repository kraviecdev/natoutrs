import Footer from "../components/Footer/index.jsx";
import Header from "../components/Header/index.jsx";
import { Outlet } from "react-router-dom";

const HomeLayout = () => {
  return (
    <>
      <Header />
      <main className="main">
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default HomeLayout;
