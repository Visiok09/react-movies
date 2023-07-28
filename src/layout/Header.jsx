import React from "react";

const Header = () => {
  return (
    <nav className="#ff9800 orange">
      <div className="nav-wrapper ">
        <a href="#" className="brand-logo">
          React Movies
        </a>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li>
            <a href="!#">Repo</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
