import { Wrapper } from "../components/Wrapper/index.js";
import { StyledLink } from "../components/Link/index.js";
import Img from "../components/Img/index.jsx";
import { Main } from "../components/Main/index.js";

const Error = () => {
  return (
    <Main column="true">
      <Wrapper error="true" column="true">
        <Img card="true" src="/img/error.png" alt="404 Image">
          <StyledLink contrast="true" to="/">
            back home
          </StyledLink>
        </Img>
      </Wrapper>
    </Main>
  );
};

export default Error;
