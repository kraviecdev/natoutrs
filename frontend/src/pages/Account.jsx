import { Navigate, Outlet, useOutletContext } from "react-router-dom";
import AccountNav from "../components/AccountNav/index.jsx";
import { Main } from "../components/common/Main/index.js";

const Account = () => {
  const data = useOutletContext();

  return (
    <Main $settings>
      <AccountNav data={data} />
      <Outlet context={data} />
      <Navigate to="settings" />
    </Main>
  );
};

export default Account;
