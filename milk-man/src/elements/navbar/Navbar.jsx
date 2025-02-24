import "./navbar.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import logoUrl from "../../assests/logo.png";
//   define data array which is collection of object
  const data = [
    { path: "/", name: "Home", id: 1, icon: "home" },
    { path: "/Records", name: "Records", id: 2, icon: "file_open" },
    { path: "/Entry", name: "Entry", id: 3, icon: "post_add" },
    { path: "/Manage", name: "Manage", id: 4, icon: "folder_managed" },
    { path: "/About", name: "About-us", id: 5, icon: "mail" },
  ];
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
  
  // function to handle click event of menu
  function handleClick() {
    if (menuClass === false) {
      setMenuClass(true);
    } else {
      setMenuClass(false);
    }
  }
  return (
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
          {data.map((person) => 
            <li className="navItems" key={person.id}>
              <span className="material-symbols-outlined">{person.icon}</span>
              <Link onClick={handleClick} className="navLink" to={person.path}>
                {person.name}
              </Link>
            </li>
          )}
        </ul>
        </nav>
      </div>
    </div>
  );
}
// define <NavbarLong /> for big screen navbar
function NavbarLong(){
  return (<div className="longNav">
    
      <ul>
        {data.map(person =>
            <li className="longNavItems" key={person.id}> 
              <Link className="longNavLink" to={person.path}>
                {person.name}
              </Link>
            </li>
          )}
      </ul>
    

  </div>);
}
export default function NavbarLayout() {
  return (
  
      <div className="navbar">
        <Logo />
        <Menu />
        <NavbarLong />
      </div>
    
  );
}
