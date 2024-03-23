import { Nav } from "../common/Nav/index.js";
import { StyledLink } from "../common/Link/index.js";
import { Wrapper } from "../common/Wrapper/index.js";
import Img from "../common/Img/index.jsx";

const Header = ({ data, logout }) => {
  return (
    <header>
      <Nav $header>
        <StyledLink to="/">
          <Img src="/img/logo-white.png" alt="Natours logo" />
          <span>Natours</span>
        </StyledLink>

        <Wrapper>
          {data ? (
            <>
              <StyledLink to="/" onClick={() => logout()}>
                Log out
              </StyledLink>
              <StyledLink to="/settings">
                <Img
                  $round
                  src={`/img/users/${data.photo}`}
                  alt={`Photo of ${data.name}`}
                />
                <span>{data.name.split(" ")[0]}</span>
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
