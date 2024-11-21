import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/contacts">Contacts</NavLink>
      <NavLink to="/about">About</NavLink>
    </>
  );
};

export default Navigation;
