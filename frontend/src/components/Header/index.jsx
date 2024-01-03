const Header = () => {
  return (
    <header className="header">
      <nav className="nav nav--tours">
        <a href="/" className="nav__el">
          All tours
        </a>
      </nav>
      <div className="header__logo">
        <img src="img/logo-white.png" alt="Natours logo" />
      </div>
      <nav className="nav nav--user">
        <button className="nav__el">Log in</button>
        <button className="nav__el nav__el--cta">Sign up</button>
      </nav>
    </header>
  );
};

export default Header;
