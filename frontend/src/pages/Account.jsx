import { Outlet, useOutletContext } from "react-router-dom";
import AccountNav from "../components/AccountNav/index.jsx";
import { Main } from "../components/common/Main/index.js";
import { Section } from "../components/common/Section/index.js";
import { useEffect } from "react";

const Account = () => {
  const data = useOutletContext();

  useEffect(() => {
    document.title = `Natours | Settings`;
  }, []);

  return (
    <Main $settings>
      <AccountNav data={data} />
      <Section $settings>
        <Outlet context={data} />
      </Section>
    </Main>
  );
};

export default Account;
