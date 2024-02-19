import { Main } from "../components/Main/index.js";
import { Nav } from "../components/Navigation/index.js";
import { StyledLink } from "../components/Link/index.js";
import Icon from "../components/Icon/Icon.jsx";
import { Outlet, useLoaderData } from "react-router-dom";
import { SecondaryHeading } from "../components/Title/index.js";
import { Wrapper } from "../components/Wrapper/index.js";
import customFetch from "../utils/customFetch.js";

export const loader = async () => {
  try {
    const { data } = await customFetch.get("/users/me");
    return data;
  } catch (error) {
    return error;
  }
};

const Account = () => {
  const { data } = useLoaderData();

  const user = [
    {
      icon: "settings",
      info: "settings",
      to: "settings",
    },
    {
      icon: "check",
      info: "Password",
      to: "pass-change",
    },
    {
      icon: "briefcase",
      info: "My bookings",
      to: "bookings",
    },
    {
      icon: "star",
      info: "My reviews",
      to: "reviews",
    },
    {
      icon: "credit-card",
      info: "Billing",
      to: "billing",
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

  console.log(data);

  return (
    <Main $column>
      <Wrapper $column>
        <Nav $settings>
          <SecondaryHeading>General</SecondaryHeading>
          {user &&
            user.map((anchor, index) => (
              <StyledLink key={index} to={anchor.to}>
                <Icon name={anchor.icon} text={anchor.info} $contrast />
              </StyledLink>
            ))}
        </Nav>
        {data.role === "admin" && (
          <Nav $settings>
            <SecondaryHeading>Admin</SecondaryHeading>
            {admin &&
              admin.map((anchor, index) => (
                <StyledLink key={index} to={anchor.to}>
                  <Icon name={anchor.icon} text={anchor.info} $contrast />
                </StyledLink>
              ))}
          </Nav>
        )}
      </Wrapper>
      <Outlet />
    </Main>
  );
};

export default Account;
