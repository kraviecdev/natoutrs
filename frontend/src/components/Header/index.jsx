import { Link } from "react-router-dom";
import customFetch from "../../utils/customFetch.js";
import { useEffect, useState } from "react";

const Header = ({ user }) => {
  const [isLogged, setIsLogged] = useState(false);

  useEffect(() => {
    if (user) {
      setIsLogged(!isLogged);
    }
  }, [user]);
  const logout = async () => {
    await customFetch.get("/users/logout");
    setIsLogged(!isLogged);
  };

  return (
    <header className="header">
      <nav className="nav nav--tours">
        <Link href="/" className="nav__el">
          All tours
        </Link>
      </nav>
      <div className="header__logo">
        <img src="/img/logo-white.png" alt="Natours logo" />
      </div>
      <nav className="nav nav--user">
        {isLogged ? (
          <>
            <button onClick={() => logout()} className="nav__el">
              Log out
            </button>
            <Link className="nav__el" to="/me">
              <img
                className="nav__user-img"
                src={`/img/users/${user.photo}`}
                alt={`Photo of ${user.name}`}
              />
              <span>{user.name.split(" ")[0]}</span>
            </Link>
          </>
        ) : (
          <>
            <Link className="nav__el" to="/login">
              Log in
            </Link>
            <Link className="nav__el nav__el--cta" to="/signup">
              Sign up
            </Link>
          </>
        )}
      </nav>
    </header>
  );
};

export default Header;
