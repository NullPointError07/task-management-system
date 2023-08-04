import { useContext } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";

const Header = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate("/");
  };

  return (
    <div className="navbar bg-yellow-100 lg:px-32 px-12 py-4">
      <div className="navbar-start">
        <Link to="/">
          <span className="normal-case text-xl">GENNEXT</span>
        </Link>
      </div>
      <div className="navbar-end space-x-3">
        <button className="btn" onClick={handleLoginClick}>
          Log In
        </button>
        <NavLink to="/register" className="btn">
          Sign Up
        </NavLink>
        <NavLink to="/tasks" className="btn">
          Dashboard
        </NavLink>
        <button className="btn">
          <NavLink to="/"> Log Out </NavLink>
        </button>
        {user ? <></> : <></>}
      </div>
    </div>
  );
};

export default Header;
