import React from "react";
import { Link } from "gatsby";

export default function Navbar() {
  const setActiveClass = () => {
    return "active";
  };

  return (
    <div className="topnav">
      <Link className={setActiveClass()} to="/index">
        Home
      </Link>
      <Link to="/">Weapons</Link>
      <Link to="/">Armours</Link>
      <Link to="/">Quests</Link>
      <Link to="/">Items</Link>
      <Link to="/">Games</Link>
    </div>
  );
}
