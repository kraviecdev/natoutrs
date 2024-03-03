import { StyledLink } from "../components/common/Link/index.js";
import { Main } from "../components/common/Main/index.js";
import Img from "../components/common/Img/index.jsx";

const Error = () => {
  return (
    <Main>
      <Img $error src="/img/error.png" alt="404 Image">
        <StyledLink $cta $error to="/">
          back home
        </StyledLink>
      </Img>
    </Main>
  );
};

export default Error;
