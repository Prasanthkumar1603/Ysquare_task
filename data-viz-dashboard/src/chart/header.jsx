import React from 'react';
import { FaSearch, FaBell, FaCog, FaUser } from 'react-icons/fa';
 
const Header = () => {
  return (
    <header className="header">
      <h1 className="header-title"  >PK Store</h1>

      <div className="header-actions">
        <div className="header-search">
          <input type="text" placeholder="Search..." />
          <FaSearch className="search-icon" />
        </div>

        <div className="header-icons">
          <FaBell className="icon" />
          <FaCog className="icon" />
          <FaUser className="avatar-icon" />
        </div>
      </div>
    </header>
  );
};

export default Header;
