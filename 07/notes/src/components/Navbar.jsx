import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="layout">
        <span>Notes</span>
        <div className="nav-links">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/notes">Notes</NavLink>
          <NavLink to="/users">Users</NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
