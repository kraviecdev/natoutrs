import { useEffect, useState } from "react";
import customFetch from "../../utils/customFetch.js";
import { Nav } from "../Navigation/styled.js";
import { Img } from "../Img/styled.js";
import { StyledLink } from "../Link/styled.js";
import Wrapper from "../Wrapper/styled.js";

const Header = ({ user }) => {
  const [isLogged, setIsLogged] = useState(false);

  useEffect(() => {
    if (user) {
      setIsLogged(true);
    }
  }, [user]);

  const logout = async () => {
    await customFetch.get("/users/logout");
    setIsLogged(false);
  };

  return (
    <header>
      <Nav>
        <StyledLink href="/">
          <Img src="/img/logo-white.png" alt="Natours logo" />
          <span>Natours</span>
        </StyledLink>

        <Wrapper>
          {isLogged ? (
            <>
              <StyledLink to="/" onClick={() => logout()}>
                Log out
              </StyledLink>
              <StyledLink to="/me">
                <Img
                  user
                  round
                  src={`/img/users/${user.photo}`}
                  alt={`Photo of ${user.name}`}
                />
                <span>{user.name.split(" ")[0]}</span>
              </StyledLink>
            </>
          ) : (
            <>
              <StyledLink to="/login">Log in</StyledLink>
              <StyledLink cta to="/signup">
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
