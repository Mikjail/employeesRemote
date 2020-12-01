import React from 'react';
import style from './List.module.css';
import ListItem from './ListItem/ListItem';

const list = (props) => {
  const getThead = () => ['EMPLOYEE', 'JOB TITLE', 'COUNTRY', 'SALARY']
    .map((thead) => (
      <div key={thead} className={style.thead}>
        {thead}
      </div>
    ));

  const getItems = () => {
    if (props.items && props.items.length > 0) {
      return props.items
        .map((item) => <ListItem key={item.id} item={item} />);
    }
    return null;
  };
  return (
    <div className={style.list} data-testid="list">
      <div className={style.header} data-testid="thead">
        {getThead()}
      </div>
      <div className={style.body} data-testid="tbody">
        {getItems()}
      </div>
    </div>
  );
};

export default list;
