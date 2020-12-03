import React from 'react';
import { Link } from 'react-router-dom';
import style from './ListItem.module.css';
import commonStyle from '../../../styles/common.module.css';

const listItem = ({ item }) => (
  <div className={style.row}>
    <div className={style.column}>
      <div className={style.mobileTitle}>
        Name
      </div>
      <div className={style.name} data-testid="name">
        <span>
          {item.name}
        </span>
        <span data-testid="dateOfBirth">
          {item.dateOfBirth}
        </span>
      </div>
    </div>
    <div className={style.column}>
      <div className={style.mobileTitle}>
        Job Title
      </div>
      <div className={style.jobTitle} data-testid="jobTitle">
        {item.jobTitle}
      </div>
    </div>
    <div className={style.column}>
      <div className={style.mobileTitle}>
        Country
      </div>
      <div className={style.country} data-testid="country">
        {item.country}
      </div>
    </div>
    <div className={style.column}>
      <div className={style.mobileTitle}>
        Salary
      </div>
      <div className={style.salary} data-testid="salary">
        <span>{item.salary.toLocaleString()}</span>
        <span>USD</span>
        <small>per year</small>
      </div>
    </div>
    <div className={style.action} data-testid="action">
      <Link
        to={`/edit/${item.id}`}
        className={[commonStyle.secondaryBtn, style.editBtn].join(' ')}
      >
        Edit
      </Link>
    </div>
  </div>
);
export default listItem;
