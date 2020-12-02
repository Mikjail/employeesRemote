import React from 'react';
import Aux from '../../hoc/Aux/aux';
import style from './Headline.module.css';

const headline = ({ title, subtitle }) => (
  <Aux>
    <h3 className={style.title} data-testid="title">{title}</h3>
    { subtitle
      ? (
        <small
          className={style.subtitle}
          data-testid="subtitle"
        >
          {subtitle}
        </small>
      )
      : null}
    <hr />
  </Aux>
);

export default headline;
