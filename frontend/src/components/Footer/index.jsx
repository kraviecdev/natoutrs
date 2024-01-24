import { StyledFooter } from "./styled.js";
import { Wrapper } from "../Wrapper/index.js";
import { StyledLink } from "../Link/index.js";
import Img from "../Img/index.jsx";

const Footer = () => {
  const links = [
    { link: "/", name: "About us" },
    { link: "/", name: "Download app" },
    { link: "/", name: "Become a guide" },
    { link: "/", name: "Careers" },
    { link: "/", name: "Contact" },
  ];

  return (
    <StyledFooter>
      <Img src="/img/logo-green.png" alt="Natour logo" />

      <Wrapper wrap>
        {links &&
          links.map((li, index) => (
            <StyledLink key={index} to={li.link}>
              {li.name}
            </StyledLink>
          ))}
      </Wrapper>
    </StyledFooter>
  );
};

export default Footer;
