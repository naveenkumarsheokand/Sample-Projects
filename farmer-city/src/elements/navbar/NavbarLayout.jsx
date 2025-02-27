import "./navbar.css";
import logo from "../../assets/navLogo.png";
import { useState } from "react";
import { Link } from "react-router-dom";
export default function NavbarLayout() {
  const [state, setState] = useState(false);
  const navData = [
    { id: 1, path: "/", name: "Home" },
    { id: 2, path: "/About-Us", name: "About Us" },
    { id: 3, path: "/Service", name: "Service" },
    { id: 4, path: "/Partner-with-us", name: "Partner with us" },
    { id: 5, path: "/Contact-Us", name: "Contact Us" },
  ];
  function handleClick() {
    if (state === true) {
      setState(false);
    } else {
      setState(true);
    }
  }
  return (
    <div className="navbar">
      <img src={logo} alt="logo" />

      <nav className="longNav">
        {navData.map((person) => (
          <li key={person.id}>
            <Link className="navLink" to={person.path}>
              {person.name}
            </Link>
          </li>
        ))}
      </nav>
      <div className="menu">
        <span class="material-symbols-outlined" onClick={handleClick}>
          menu
        </span>
        <div className={state ? "showMenu" : "closeMenu"}>
          <img src={logo} alt="logo" />
          <span class="material-symbols-outlined" onClick={handleClick}>
            close
          </span>
          <nav className="shortNav">
            {navData.map((person) => (
              <li key={person.id}>
                <Link className="shortNavLink" to={person.path}>
                  {person.name}
                </Link>
              </li>
            ))}
          </nav>
        </div>
      </div>

      {/* <div className="shortNav"></div> */}
    </div>
  );
}
