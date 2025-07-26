import { NavLink } from 'react-router-dom';
import { Link } from "react-router-dom";
function Header() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="logo">
        

        <Link to="/" className="logo-link">
          <img src="/logo.png" alt="SBTechEdge Logo" />
        </Link>

          {/* <img src="/logo.png" alt="SBTechEdge Logo" /> */}
        </div>
        <ul className="nav-links">
          <li><NavLink to="/" end className={({ isActive }) => isActive ? "active" : ""}>Home</NavLink></li>
          <li><NavLink to="/about" className={({ isActive }) => isActive ? "active" : ""}>About</NavLink></li>
          <li><NavLink to="/courses" className={({ isActive }) => isActive ? "active" : ""}>Courses</NavLink></li>
          <li><NavLink to="/materials" className={({ isActive }) => isActive ? "active" : ""}>Study Materials</NavLink></li>
          <li><NavLink to="/contact" className={({ isActive }) => isActive ? "active" : ""}>Contact</NavLink></li>
        </ul>
      </div>
    </nav>
  );
}

export default Header;
