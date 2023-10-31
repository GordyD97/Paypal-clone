import React from "react";

const Navbar = () => {
  return (
    <div className="navbar-wrapper">
      <nav className="navbar">
        <div className="menu">
          <div className="menu-icon">
            <div className="line line-1"></div>
            <div className="line line-2"></div>
            <div className="line line-3"></div>
          </div>
          <span>Menu</span>
        </div>
        <div className="navbar-logo logo">
          <span className="p-1">P</span>
          <span className="p-2">P</span>
          PayPal
        </div>
        <ul className="nav-list">
          {/* Personal */}
          <li className="nav-list-item dropdown-hover">
            {/* Personal Dropdown */}
            {/* ... */}
          </li>
          {/* Business */}
          <li className="nav-list-item dropdown-hover">
            {/* Business Dropdown */}
            {/* ... */}
          </li>
          <li className="nav-list-item">
            <a href="#" className="nav-list-link">
              Partners and Developers
            </a>
          </li>
        </ul>
        <div className="navbar-buttons">
          <button className="navbar-btn login-btn login">Login</button>
          <button className="navbar-btn signup-btn signup">Signup</button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
