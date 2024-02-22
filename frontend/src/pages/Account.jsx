import { Outlet, useOutletContext } from "react-router-dom";
import { Main } from "../components/Main/index.js";
import { Wrapper } from "../components/Wrapper/index.js";
import { Nav } from "../components/Navigation/index.js";
import { SecondaryHeading } from "../components/Title/index.js";
import { StyledLink } from "../components/Link/index.js";
import Icon from "../components/Icon/Icon.jsx";
import Burger from "../components/Burger/index.jsx";
import { useState } from "react";

const Account = () => {
  const data = useOutletContext();
  const [active, setActive] = useState(false);
  const user = [
    {
      icon: "settings",
      info: "settings",
      to: "",
    },
    {
      icon: "lock",
      info: "Password",
      to: "pass-change",
    },
    {
      icon: "briefcase",
      info: "My bookings",
      to: "",
    },
    {
      icon: "star",
      info: "My reviews",
      to: "reviews",
    },
    {
      icon: "credit-card",
      info: "Billing",
      to: "",
    },
  ];
  const admin = [
    {
      icon: "map",
      info: "Manage tours",
      to: "menage-tours",
    },
    {
      icon: "users",
      info: "menage users",
      to: "menage-users",
    },
    {
      icon: "star",
      info: "menage reviews",
      to: "menage-reviews",
    },
    {
      icon: "briefcase",
      info: "menage bookings",
      to: "menage-bookings",
    },
  ];

  return (
    <Main $settings>
      <Wrapper $column $settings $active={active}>
        <Burger $active={active} onClick={() => setActive(!active)} />
        <Nav $settings>
          <SecondaryHeading>General</SecondaryHeading>
          {user &&
            user.map((anchor, index) => (
              <StyledLink
                key={index}
                to={anchor.to}
                onClick={() => setActive(false)}
              >
                <Icon name={anchor.icon} text={anchor.info} $contrast />
              </StyledLink>
            ))}
        </Nav>
        {data?.role === "admin" && (
          <Nav $settings>
            <SecondaryHeading>Admin</SecondaryHeading>
            {admin &&
              admin.map((anchor, index) => (
                <StyledLink
                  key={index}
                  to={anchor.to}
                  onClick={() => setActive(false)}
                >
                  <Icon name={anchor.icon} text={anchor.info} $contrast />
                </StyledLink>
              ))}
          </Nav>
        )}
      </Wrapper>
      <Outlet context={data} />
    </Main>
  );
};

export default Account;
