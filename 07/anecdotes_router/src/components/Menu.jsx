import { NavLink } from 'react-router-dom';

const Menu = () => {
  const padding = {
    paddingRight: 5,
  };
  return (
    <div>
      <NavLink to="/" style={padding}>
        Anecdotes
      </NavLink>
      <NavLink to="/create" style={padding}>
        Create New
      </NavLink>
      <NavLink to="/about" style={padding}>
        About
      </NavLink>
    </div>
  );
};

export default Menu;
