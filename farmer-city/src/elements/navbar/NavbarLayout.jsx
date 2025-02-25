import "./navbar.css";
import logo from "../../assets/navLogo.png";
import { Link } from "react-router-dom";
export default function NavbarLayout() {
  const navData = [
    { id: 1, path: "/", name: "Home" },
    { id: 2, path: "/About-Us", name: "About Us" },
    { id: 3, path: "/Service", name: "Service" },
    { id: 4, path: "/Partner-with-us", name: "Partner with us" },
    { id: 5, path: "/Contact-Us", name: "Contact Us" },
  ];
  return (
    <div className="navbar">
      <img src={logo} alt="logo" />
      
        <nav className="longNav">
          {navData.map((person) => (
            <li key={person.id}>
              <Link className="navLink" to={person.path}>{person.name}</Link>
            </li>
          ))}
        </nav>
        <div className="menu">
          <span className="">menu</span>

        </div>
      
      {/* <div className="shortNav"></div> */}
    </div>
  );
}
