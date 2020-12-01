import React from 'react';
import './Navbar.css';

const navBar = () => (
  <nav className="nav-bar" data-testid="navbar">
    <div className="nav-bar__profile-img" data-testid="profile-image" />
    <div className="nav-bar__profile-detail" data-testid="profile-details">
      <span> Julie Howard </span>
      <small> Admin </small>
    </div>
  </nav>
);

export default navBar;
