import { NavLink, Outlet } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <nav className="navbar">
        <NavLink to="/">Busy Buy</NavLink>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/signip">SignIn</NavLink>
        <NavLink to="/cart">Cart</NavLink>
      </nav>
      <Outlet />
    </div>
  );
}

export default Navbar;
