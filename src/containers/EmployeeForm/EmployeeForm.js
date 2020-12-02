import React from 'react';
import Headline from '../../components/Headline/Headline';
import style from './EmployeeForm.module.css';

const employeeForm = () => {
  const title = 'Add a new employee';
  const subtitle = 'Fill out information of your new employe';

  return (
    <div className={style.main}>
      <Headline
        title={title}
        subtitle={subtitle}
      />
    </div>
  );
};

export default employeeForm;
