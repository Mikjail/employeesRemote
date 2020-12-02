import React from 'react';
import { Link } from 'react-router-dom';
import commonStyle from '../../styles/common.module.css';
import style from './NoContent.module.css';

const noContent = () => (
  <div className={style.content} data-testid="no-content">
    <p className={commonStyle.text}>Sorry,the employee you are trying to edit does not exist</p>
    <Link className={[commonStyle.primaryBtn, style.btn].join(' ')} to="/"> Back </Link>
  </div>
);

export default noContent;
