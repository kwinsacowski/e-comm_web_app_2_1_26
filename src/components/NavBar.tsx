import React from 'react';
import { Link } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';

const NavBar: React.FC = () => {
  return (
    <nav
      className="navbar"
      style={{
        background: 'linear-gradient(90deg, #49a1b1, #6bdaff)',
      }}
    >
        <div className="container d-flex justify-content-between align-items-center">
        {/* Store Name Left */}
        <Link className="navbar-brand" to="/">Brivana</Link>

        {/* Centered Links */}
        <div className="d-flex justify-content-center flex-grow-1">
          <ul className="navbar-nav d-flex flex-row gap-4">
            <li className="nav-item">
              <Link className="nav-link no-decoration" to="/">Home (Shop all Products)</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link no-decoration" to="/shop">Shop By Category</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link no-decoration d-flex align-items-center" to="/cart">
                <FaShoppingCart />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};


export default NavBar;
