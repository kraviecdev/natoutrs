const Footer = () => {
  const list = [
    { link: "/", name: "About us" },
    { link: "/", name: "Download app" },
    { link: "/", name: "Become a guide" },
    { link: "/", name: "Careers" },
    { link: "/", name: "Contact" },
  ];

  return (
    <footer className="footer">
      <div className="footer__logo">
        <img src="/img/logo-green.png" alt="Natour logo" />
      </div>
      <ul className="footer__nav">
        {list &&
          list.map((li, index) => (
            <li key={index}>
              <a href={li.link}>{li.name}</a>
            </li>
          ))}
      </ul>
      <p className="footer__copyright">
        &copy; by Jonas Schmedtmann. Created by Kraviecdev
      </p>
    </footer>
  );
};

export default Footer;
