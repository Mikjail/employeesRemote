import React from 'react';
import commonStyle from '../../../styles/common.module.css';

const button = ({
  disabled, btnType, clicked, children
}) => (
  <button
    data-testid="btn"
    type="button"
    disabled={disabled}
    className={commonStyle[btnType]}
    onClick={clicked}
  >
    {children}
  </button>
);

export default button;
