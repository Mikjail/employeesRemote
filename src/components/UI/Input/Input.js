import React from 'react';
import styles from './Input.module.css';
import Aux from '../../../hoc/Aux/aux';

const input = (props) => {
  let inputElement = null;
  const inputClasses = [styles.inputElement];

  if (props.invalid && props.shouldValidate && props.touched) {
    inputClasses.push(styles.invalid);
  }

  switch (props.elementType) {
    case ('input'):
      inputElement = (
        <input
          className={inputClasses.join(' ')}
          {...props.elementConfig}
          value={props.value}
          onChange={props.changed}
        />
      );
      break;
    case ('select'):
      inputElement = (
        <select
          className={inputClasses.join(' ')}
          value={props.value}
          onChange={props.changed}
        >
          {props.elementConfig.options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.displayValue}
            </option>
          ))}
        </select>
      );
      break;
    default:
      inputElement = (
        <input
          className={inputClasses.join(' ')}
          {...props.elementConfig}
          value={props.value}
          onChange={props.changed}
        />
      );
  }

  return (
    <Aux>
      <label htmlFor={props.elementConfig.name} className={styles.label}>
        {props.label}
        {inputElement}
      </label>
      {props.hint ? <small className={styles.hint}>{props.hint}</small> : null}
    </Aux>
  );
};

export default input;
