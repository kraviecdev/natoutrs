import { Navigate, Outlet, useOutletContext } from "react-router-dom";
import AccountNav from "../components/AccountNav/index.jsx";
import { Main } from "../components/common/Main/index.js";
import { Section } from "../components/common/Section/index.js";

const Account = () => {
  const data = useOutletContext();

  return (
    <Main $settings>
      <AccountNav data={data} />
      <Section $settings>
        <Outlet context={data} />
      </Section>
      <Navigate to="settings" />
    </Main>
  );
};

export default Account;
