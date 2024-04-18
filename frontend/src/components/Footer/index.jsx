import Img from "../_assets/Img/index.jsx";
import { Nav } from "../_assets/Nav/index.js";
import { StyledLink } from "../_assets/Link/index.js";

const Footer = () => {
  const links = [
    { link: "/", name: "About us" },
    { link: "/", name: "Download app" },
    { link: "/", name: "Become a guide" },
    { link: "/", name: "Careers" },
    { link: "/", name: "Contact" },
  ];

  return (
    <footer>
      <Img src="/img/logo-green.png" alt="Natour logo" />

      <Nav>
        {links &&
          links.map((li, index) => (
            <StyledLink $dark key={index} to={li.link}>
              {li.name}
            </StyledLink>
          ))}
      </Nav>
    </footer>
  );
};

export default Footer;
