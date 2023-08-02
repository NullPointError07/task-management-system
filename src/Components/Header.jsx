import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="navbar bg-yellow-100 lg:px-32 px-12 py-4">
      <div className="navbar-start">
        <NavLink to="/">
          <span className="normal-case text-xl">GENNEXT</span>
        </NavLink>
      </div>
      <div className="navbar-end space-x-3">
        <NavLink to="/login" className="btn">
          Log In
        </NavLink>
        <NavLink to="/register" className="btn">
          Sign Up
        </NavLink>
      </div>
    </div>
  );
};

export default Header;
