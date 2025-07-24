import "./navbar.css";
import logo from "../../assets/logo.svg";

function Navbar() {
  return (
    <div className="header">
      <img className="logo" src={logo} alt="logo" />
      <div className="links-container">
        <ul className="link-list">
          <li>
            <a className="link" href="/">
              Home
            </a>
          </li>
          <li>
            <a className="link" href="/jrcode/portfolio">
              Portfolio
            </a>
          </li>
          <li>
            <a className="link" href="/jrcode/AboutUs">
              About Us
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
