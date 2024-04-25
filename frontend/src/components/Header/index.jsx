import { useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { useDispatch, useSelector } from "react-redux";
import {
  logoutUser,
  selectCurrentUser,
  selectIsLoggedIn,
  setUser,
} from "../../pages/dashboard/usersSlice.js";
import customFetch from "../../utils/customFetch.js";

import { Nav } from "../_assets/Nav/index.js";
import { StyledLink } from "../_assets/Link/index.js";
import { Wrapper } from "../_assets/Wrapper/index.js";
import Img from "../_assets/Img/index.jsx";

const Header = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectCurrentUser);
  const isLoggedIn = useSelector(selectIsLoggedIn);

  const { data } = useQuery({
    queryKey: ["user"],
    queryFn: async () => {
      const { data } = await customFetch.get("/users/me");
      return data;
    },
  });

  useEffect(() => {
    if (!!data) {
      dispatch(setUser(data.data));
    }
  }, [data]);

  const logout = async () => {
    const response = await customFetch.get("/users/logout");
    if (response.status === 200) {
      dispatch(logoutUser());
    }
  };

  return (
    <header>
      <Nav $header>
        <StyledLink to="/">
          <Img src="/img/logo-white.png" alt="Natours logo" />
          <span>Natours</span>
        </StyledLink>

        <Wrapper>
          {isLoggedIn ? (
            <>
              <StyledLink to="/" onClick={logout}>
                Log out
              </StyledLink>
              <StyledLink to="/settings">
                <Img
                  $round
                  src={`/img/users/${user.photo}`}
                  alt={`Photo of ${user.name}`}
                />
                <span>{user.name.split(" ")[0]}</span>
              </StyledLink>
            </>
          ) : (
            <>
              <StyledLink to="/login">Log in</StyledLink>
              <StyledLink $cta to="/signup">
                Sign up
              </StyledLink>
            </>
          )}
        </Wrapper>
      </Nav>
    </header>
  );
};

export default Header;
