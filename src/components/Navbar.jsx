import { Link, useLocation } from "react-router-dom";
import logo from "../assets/logo.png";

export default function Navbar() {
  const location = useLocation();

  return (
    <div className="navbar">
      <div className="nav-left">
        <img src={logo} className="logo" />
        <span className="brand">NyayaSakhi</span>
      </div>

      <div className="nav-right">
        <Link to="/" className={location.pathname === "/" ? "active" : ""}>
          Home
        </Link>

        <Link
          to="/dashboard"
          className={location.pathname === "/dashboard" ? "active" : ""}
        >
          Dashboard
        </Link>

        <span>About</span>

        <Link to="/dashboard" className="cta">
          Explore Data
        </Link>
      </div>
    </div>
  );
}
