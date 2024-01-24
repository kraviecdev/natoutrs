import { Nav } from "../Navigation/index.js";
import { StyledLink } from "../Link/index.js";
import { Wrapper } from "../Wrapper/index.js";
import Img from "../Img/index.jsx";

const Header = ({ user, logout }) => {
  return (
    <header>
      <Nav>
        <StyledLink to="/">
          <Img src="/img/logo-white.png" alt="Natours logo" />
          <span>Natours</span>
        </StyledLink>

        <Wrapper>
          {user ? (
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
