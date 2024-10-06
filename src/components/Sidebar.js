import React from 'react';
import './Sidebar.css'; // Custom styling for Sidebar
import logo from '../assets/images/logo.png'; // Adjust the path as per your folder structure

const Sidebar = () => {
  return (
    <div className="sidebar">
      {/* Logo and Lunara Title */}
      <div className="sidebar-header">
        <img src={logo} alt="Lunara Logo" className="logo" />
        <p className="logo-text">LUNARA</p>
      </div>

      {/* Menu items */}
      <ul className="menu-list">
        <li>Runway Overview</li>
        <li>Financial Health</li>
        <li>Data Sources</li>
        <li>Sample Scenario</li>
        <li>B2B SaaS Revenue</li>
      </ul>

      {/* Divider */}
      <hr className="divider" />

      {/* Bottom Section */}
      <div className="bottom-section">
        <button className="upgrade-btn">Upgrade to Plus</button>
        <div className="user-info">
          <span className="user-name">Solace</span>
          <span className="user-fullname">Salena James</span>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
