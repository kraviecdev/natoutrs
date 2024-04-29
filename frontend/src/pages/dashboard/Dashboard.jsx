import { Main } from "../../components/_assets/Main/index.js";
import { Nav } from "../../components/_assets/Nav/index.js";
import { StyledLink } from "../../components/_assets/Link/index.js";
import { Outlet } from "react-router-dom";
import Icon from "../../components/_assets/Icon/index.jsx";
import Burger from "../../components/_assets/Burger/index.jsx";
import { useState } from "react";

const Dashboard = () => {
  const [active, setActive] = useState(false);

  return (
    <Main $settings>
      <Nav $settings $active={active}>
        <Burger onClick={() => setActive(!active)} $active={active} />
        <StyledLink $contrast to="update-my-data">
          <Icon name="user" />
          account
        </StyledLink>
        <StyledLink $contrast to="update-my-password">
          <Icon name="lock" />
          password
        </StyledLink>
        <StyledLink $contrast to="my-bookings">
          <Icon name="briefcase" />
          bookings
        </StyledLink>
        <StyledLink $contrast to="my-reviews">
          <Icon name="star" />
          reviews
        </StyledLink>
      </Nav>
      <Outlet />
    </Main>
  );
};

export default Dashboard;
