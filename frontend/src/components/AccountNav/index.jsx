import { Nav } from "../common/Nav/index.js";
import Burger from "../common/Burger/index.jsx";
import { StyledLink } from "../common/Link/index.js";
import IconInfo from "../common/IconInfo/index.jsx";
import { useState } from "react";

const AccountNav = ({ data }) => {
  const [active, setActive] = useState(false);
  const user = [
    {
      icon: "settings",
      info: "settings",
      to: "settings",
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
      to: "my-reviews",
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
      to: "manage-tours",
    },
    {
      icon: "users",
      info: "Manage users",
      to: "manage-users",
    },
    {
      icon: "star",
      info: "Manage reviews",
      to: "manage-reviews",
    },
    {
      icon: "briefcase",
      info: "Manage bookings",
      to: "",
    },
  ];

  return (
    <Nav $settings $active={active}>
      <Burger $active={active} onClick={() => setActive(!active)} />
      {user &&
        user.map((anchor, index) => (
          <StyledLink key={index} to={anchor.to}>
            <IconInfo name={anchor.icon} info={anchor.info} $contrast />
          </StyledLink>
        ))}
      {data?.role === "admin" &&
        admin.map((anchor, index) => (
          <StyledLink key={index} to={anchor.to}>
            <IconInfo name={anchor.icon} info={anchor.info} $contast />
          </StyledLink>
        ))}
    </Nav>
  );
};

export default AccountNav;
