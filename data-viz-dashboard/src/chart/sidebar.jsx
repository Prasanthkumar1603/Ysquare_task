import React from 'react';
import { NavLink } from 'react-router-dom'; // Use NavLink for active class support

const Sidebar = () => {
  return (
    <div className="sidebar">
      <nav>
        <ul>
          <li>
            <NavLink to="/" activeClassName="active">Dashboard</NavLink>
          </li>
          <li>
            <NavLink to="/reports" activeClassName="active">Reports</NavLink>
          </li>
          <li>
            <NavLink to="/settings" activeClassName="active">Settings</NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
