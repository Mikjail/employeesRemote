import React from 'react';
import style from './Navbar.module.css';

const navBar = () => (
  <nav data-testid="navbar">
    <div className={style.nav}>
      <div className={style.profileImg} data-testid="profile-image" />
      <div className={style.profileDetails} data-testid="profile-details">
        <span className={style.userName}> Julie Howard </span>
        <small className={style.userRole}> Admin </small>
      </div>
    </div>
  </nav>
);

export default navBar;
