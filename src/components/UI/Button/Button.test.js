import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Button from './Button';

describe('Testing Button component', () => {
  test('Renders Button without properties ', () => {
    const { getByTestId } = render(<Button />);

    const btnElement = getByTestId('btn');

    expect(btnElement).toBeEnabled();
  });

  test('Renders Button with props (disabled = true)', () => {
    const props = {
      disabled: true,
      btnType: 'primaryBtn',
      clicked: jest.fn()
    };
    const { getByTestId } = render(<Button {...props} />);
    const btnElement = getByTestId('btn');

    fireEvent.click(getByTestId('btn'));

    expect(btnElement).toBeDisabled();
    expect(btnElement).toHaveClass(props.btnType);
    expect(props.clicked).toHaveBeenCalledTimes(0); // because it is disabled
  });

  it('Should not trigger onClick event (disabled = true)', () => {
    const props = {
      disabled: true,
      clicked: jest.fn()
    };
    const { getByTestId } = render(<Button {...props} />);

    fireEvent.click(getByTestId('btn'));

    expect(props.clicked).toHaveBeenCalledTimes(0); // because it is enabled
  });

  it('Should trigger onClick event (disabled = false)', () => {
    const props = {
      disabled: false,
      clicked: jest.fn()
    };
    const { getByTestId } = render(<Button {...props} />);

    fireEvent.click(getByTestId('btn'));

    expect(props.clicked).toHaveBeenCalledTimes(1); // because it is enabled
  });
});
