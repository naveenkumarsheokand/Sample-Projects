import "./navbar.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import logoUrl from "../../assests/logo.png";

function Logo() {
  return (
    <>
      <img src={logoUrl} alt="Cow logo" />
      <h1>Milk Men</h1>
    </>
  );
}
// define <Menu /> for small screen
function Menu() {
  const [menuClass, setMenuClass] = useState(false);
  //   define data array which is collection of object
  const data = [
    { path: "/", name: "Home", key: "1", icon: "home" },
    { path: "/Records", name: "Records", key: "2", icon: "file_open" },
    { path: "/Entry", name: "Entry", key: "3", icon: "post_add" },
    { path: "/Manage", name: "Manage", key: "4", icon: "folder_managed" },
    { path: "/About", name: "About-us", key: "5", icon: "mail" },
  ];
  // function to handle click event of menu
  function handleClick() {
    if (menuClass === false) {
      setMenuClass(true);
    } else {
      setMenuClass(false);
    }
  }
  return (
    <>
      <div className="menu">
        <span className="material-symbols-outlined" onClick={handleClick}>
          menu
        </span>
        <div className={menuClass ? "menuShow" : "menuClose"}>
          <div>
            <span className="material-symbols-outlined" onClick={handleClick}>
              close
            </span>
          </div>
          <nav>
            <ul>
              {data.map((person) => {
                return (
                  <>
                    <li className="navItems" key={person.key}>
                      
                      <Link onClick={handleClick} className="navLink" to={person.path}><span className="material-symbols-outlined">
                        {person.icon}
                      </span>{person.name}</Link>
                    </li>
                  </>
                );
              })}
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
}

export default function NavbarLayout() {
  return (
    <div>
      <div className="navbar">
        <Logo />
        <Menu />
      </div>
    </div>
  );
}
