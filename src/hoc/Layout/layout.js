import React from 'react';
import Aux from '../Aux/aux';
import Navbar from '../../components/Navbar/Navbar';

const layout = ({ children }) => (
  <Aux>
    <Navbar />
    <main data-testid="main">{children}</main>
  </Aux>
);

export default layout;
