import { Link, NavLink } from "react-router-dom";
import logo from "../assets/Rp-logo.png";
import courseIcon from "../assets/course-icon-5.jpg";

export default function Header() {
  const getClass = ({ isActive }) => (isActive ? "nav-active" : null);

  return (
    <header  style={{ backgroundColor: "#e85b14" }}>
      <div className="container">
      <Link to="/">
        <img
          className="logo"
          src={logo}
          alt="RP logo"
          title="RP | Home"
        />
      </Link>

      <nav>
        <NavLink to="/" className={getClass}>
          SCHOOL OF INFOCOMM (SOI)
        </NavLink>
        <NavLink to="/about" className={getClass}>
          About SOI
        </NavLink>
        <NavLink to="/diplomas" className={getClass}>
          Full-time Courses
        </NavLink>
        <NavLink to="/register" className={getClass}>
          Register
        </NavLink>
        <NavLink to="/favourites" className={getClass}>
          <img
          className="course-icon"
          src={courseIcon}
          alt="course icon"
          title="Course | Favorite"
        />
        </NavLink>
      </nav>
      </div>
    </header>
  );
}
