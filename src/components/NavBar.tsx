import React from 'react';
import { Link } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';

const NavBar: React.FC = () => {
  return (
    <nav
      className="navbar"
      style={{
        background: 'linear-gradient(90deg, #49a1b1, #6bdaff)',
        padding: '0.5rem 1rem',
      }}
    >
      <div className="container d-flex justify-content-between align-items-center">
        {/* Left: Store Name */}
        <Link className="navbar-brand" to="/" style={{ fontWeight: 700, color: 'white' }}>
          Brivana
        </Link>

        {/* Center: Links */}
        <div className="d-flex gap-4">
          <Link className="nav-link no-decoration text-white" to="/">
            Home (Shop all Products)
          </Link>
          <Link className="nav-link no-decoration text-white" to="/shop">
            Shop By Category
          </Link>
        </div>

        {/* Right: Cart */}
        <Link
          to="/cart"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.25rem',
            color: 'white',
            backgroundColor: '#ffa07a',
            padding: '0.5rem 1rem',
            borderRadius: '8px',
            fontWeight: 600,
            textDecoration: 'none',
          }}
        >
          <FaShoppingCart />
          <span>Cart</span>
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;
