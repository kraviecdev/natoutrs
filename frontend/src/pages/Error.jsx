import { StyledLink } from "../components/_assets/Link/index.js";
import { Main } from "../components/_assets/Main/index.js";
import Img from "../components/_assets/Img/index.jsx";

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
