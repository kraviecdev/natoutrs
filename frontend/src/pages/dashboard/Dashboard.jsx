import { Main } from "../../components/_assets/Main/index.js";
import { Nav } from "../../components/_assets/Nav/index.js";
import { StyledLink } from "../../components/_assets/Link/index.js";
import { Outlet } from "react-router-dom";
import Icon from "../../components/_assets/Icon/index.jsx";
import Burger from "../../components/_assets/Burger/index.jsx";
import { useState } from "react";
import { Section } from "../../components/_assets/Section/index.js";

const Dashboard = () => {
  const [active, setActive] = useState(false);

  const links = [
    {
      name: "account",
      path: "/settings",
      icon: "user",
    },
    {
      name: "password",
      path: "update-my-password",
      icon: "lock",
    },
    {
      name: "bookings",
      path: "my-bookings",
      icon: "briefcase",
    },
    {
      name: "reviews",
      path: "my-reviews",
      icon: "star",
    },
  ];

  return (
    <Main $settings>
      <Nav $settings $active={active}>
        <Burger onClick={() => setActive(!active)} $active={active} />
        {links.map((link, index) => (
          <StyledLink
            $contrast
            to={link.path}
            key={index}
            onClick={() => setActive(false)}
          >
            <Icon name={link.icon} />
            {link.name}
          </StyledLink>
        ))}
      </Nav>
      <Section $settings>
        <Outlet />
      </Section>
    </Main>
  );
};

export default Dashboard;
