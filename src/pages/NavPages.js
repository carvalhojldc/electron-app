import { Link } from "react-router-dom";

const NavPages = () => {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/network">Network</Link>
      <Link to="/starWars">Start Wars Info</Link>
    </nav>
  );
};

export default NavPages;
