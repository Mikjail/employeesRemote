import React from 'react';
import commonStyle from '../../../styles/common.module.css';

const button = ({
  disabled, classType, clicked, children, btnType
}) => {
  const getBtn = () => {
    if (btnType === 'submit') {
      return (
        <button
          data-testid="btn"
          type="submit"
          disabled={disabled}
          className={commonStyle[classType]}
          onClick={clicked}
        >
          {children}
        </button>
      );
    }
    return (
      <button
        data-testid="btn"
        type="button"
        disabled={disabled}
        className={commonStyle[classType]}
        onClick={clicked}
      >
        {children}
      </button>
    );
  };
  return getBtn();
};

export default button;
