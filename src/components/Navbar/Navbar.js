import React from 'react';
import style from './Navbar.module.css';

const navBar = () => (
  <nav className={style.nav} data-testid="navbar">
    <div className={style.profileImg} data-testid="profile-image" />
    <div className={style.profileDetails} data-testid="profile-details">
      <span> Julie Howard </span>
      <small className={style.userRole}> Admin </small>
    </div>
  </nav>
);

export default navBar;
