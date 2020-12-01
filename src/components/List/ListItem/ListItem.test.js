import React from 'react';
import { render, screen } from '@testing-library/react';
import ListItem from './ListItem';
import { initialState } from '../../../store/reducers/employees';

test('Renders columns from ListItem component', () => {
  render(<ListItem item={initialState[0]} />);

  const nameColumn = screen.getByTestId('name');
  const dayOfBirth = screen.getByTestId('dayOfBirth');
  const jobTitle = screen.getByTestId('jobTitle');
  const countryColumn = screen.getByTestId('country');
  const salaryColumn = screen.getByTestId('salary');
  const actionColumn = screen.getByTestId('action');

  expect(nameColumn).toHaveTextContent(initialState[0].name);
  expect(dayOfBirth).toHaveTextContent(initialState[0].dayOfBirth);
  expect(jobTitle).toHaveTextContent(initialState[0].jobTitle);
  expect(countryColumn).toHaveTextContent(initialState[0].country);
  expect(salaryColumn).toHaveTextContent(initialState[0].salary.toLocaleString());
  expect(actionColumn).toHaveTextContent('Edit');
});
