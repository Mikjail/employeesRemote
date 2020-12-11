import React from 'react';
import { Link } from 'react-router-dom';
import style from './ListItem.module.css';
import commonStyle from '../../../styles/common.module.css';

const listItem = ({ item }) => (
  <tr className={style.row}>
    <td className={style.column}>
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
    </td>
    <td className={style.column}>
      <div className={style.mobileTitle}>
        Job Title
      </div>
      <div className={style.jobTitle} data-testid="jobTitle">
        {item.jobTitle}
      </div>
    </td>
    <td className={style.column}>
      <div className={style.mobileTitle}>
        Country
      </div>
      <div className={style.country} data-testid="country">
        {item.country}
      </div>
    </td>
    <td className={style.column}>
      <div className={style.mobileTitle}>
        Salary
      </div>
      <div className={style.salary} data-testid="salary">
        <span>{item.salary.toLocaleString()}</span>
        <span>USD</span>
        <small>per year</small>
      </div>
    </td>
    <td className={style.action} data-testid="action">
      <Link
        to={`/edit/${item.id}`}
        className={[commonStyle.secondaryBtn, style.editBtn].join(' ')}
      >
        Edit
      </Link>
    </td>
  </tr>
);
export default listItem;
