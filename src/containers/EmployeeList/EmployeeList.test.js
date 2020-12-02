import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import EmployeeList from './EmployeeList';
import { render, screen } from '../../utils/test.utils';
import { initialState } from '../../store/reducers/employees';

beforeEach(() => {
  // Setup compoonent
  render(
    <BrowserRouter>
      <EmployeeList />
    </BrowserRouter>,
    { initialState: { employees: [...initialState] } }
  );
});

test('Renders EmployeeList component', () => {
  const mainView = screen.getByTestId('employees-list');
  const headline = screen.getByTestId('headline');
  const addBtn = screen.getByTestId('add-btn');

  expect(mainView).toBeInTheDocument();
  expect(headline).toBeInTheDocument();
  expect(addBtn).toHaveTextContent('Add employee');
});

test('Checking employees counter', () => {
  const counter = screen.getByTestId('counter');

  expect(counter).toHaveTextContent('3');
});
