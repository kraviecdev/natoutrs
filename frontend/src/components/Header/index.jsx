import { Nav } from "../_assets/Nav/index.js";
import { StyledLink } from "../_assets/Link/index.js";
import { Wrapper } from "../_assets/Wrapper/index.js";
import Img from "../_assets/Img/index.jsx";
import customFetch from "../../utils/customFetch.js";
import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";

const Header = () => {
  const [currentUser, setCurrentUser] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const { data: userData } = useQuery({
    queryKey: ["user"],
    queryFn: async () => {
      if (!isLoggedIn) {
        const { data } = await customFetch.get("/users/me");
        return data;
      }
    },
  });

  useEffect(() => {
    if (userData) {
      setCurrentUser(userData.data);
      setIsLoggedIn(true);
    } else {
      setCurrentUser(null);
    }
  }, [userData]);

  const logout = async () => {
    const response = await customFetch.get("/users/logout");
    if (response.status === 200) {
      setIsLoggedIn(false);
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
                  src={`/img/users/${currentUser.photo}`}
                  alt={`Photo of ${currentUser.name}`}
                />
                <span>{currentUser.name.split(" ")[0]}</span>
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
