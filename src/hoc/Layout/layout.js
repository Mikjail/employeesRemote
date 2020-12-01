import React from 'react';
import Aux from '../Aux/aux';
import Navbar from '../../components/Navbar/Navbar';
import style from './layout.module.css';

const layout = ({ children }) => (
  <Aux>
    <Navbar />
    <main data-testid="main" className={style.main}>{children}</main>
  </Aux>
);

export default layout;
