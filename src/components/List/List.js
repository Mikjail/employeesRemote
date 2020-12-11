import React from 'react';
import style from './List.module.css';
import ListItem from './ListItem/ListItem';

const list = (props) => {
  const getThead = () => ['EMPLOYEE', 'JOB TITLE', 'COUNTRY', 'SALARY']
    .map((thead) => (
      <th key={thead} className={style.thead}>
        {thead}
      </th>
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
      <table>
        <thead data-testid="thead">
          <tr>
            {getThead()}
          </tr>
        </thead>
        <tbody>
          {getItems()}
        </tbody>
      </table>
    </div>
  );
};

export default list;
