import React from 'react';
import style from './ListItem.module.css';
import Button from '../../UI/Button/Button';

const listItem = ({ item }) => {
  const onEdit = (itemId) => {
    console.log('on edit', itemId);
  };

  return (
    <div className={style.row}>
      <div className={style.name} data-testid="name">
        <span>
          {item.name}
        </span>
        <span data-testid="dayOfBirth">
          {item.dayOfBirth}
        </span>
      </div>
      <div className={style.jobTitle} data-testid="jobTitle">
        {item.jobTitle}
      </div>
      <div className={style.country} data-testid="country">
        {item.country}
      </div>
      <div className={style.salary} data-testid="salary">
        <span>{item.salary.toLocaleString()}</span>
        <span>USD</span>
        <small>per year</small>
      </div>
      <div className={style.action} data-testid="action">
        <Button btnType="secondaryBtn" clicked={() => onEdit(item.id)}>
          Edit
        </Button>
      </div>
    </div>
  );
};
export default listItem;
