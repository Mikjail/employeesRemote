import React from 'react';
import { MemoryRouter, BrowserRouter, Route } from 'react-router-dom';
import { fireEvent, render, screen } from '@testing-library/react';

import ListItem from './ListItem';
import { initialState } from '../../../store/reducers/employees';

describe('Testing List Item componenr', () => {
  it('Should render the columns from ListItem component', () => {
    render(<BrowserRouter><ListItem item={initialState[0]} /></BrowserRouter>);

    const nameColumn = screen.getByTestId('name');
    const dateOfBirth = screen.getByTestId('dateOfBirth');
    const jobTitle = screen.getByTestId('jobTitle');
    const countryColumn = screen.getByTestId('country');
    const salaryColumn = screen.getByTestId('salary');
    const actionColumn = screen.getByTestId('action');

    expect(nameColumn).toHaveTextContent(initialState[0].name);
    expect(dateOfBirth).toHaveTextContent(initialState[0].dateOfBirth);
    expect(jobTitle).toHaveTextContent(initialState[0].jobTitle);
    expect(countryColumn).toHaveTextContent(initialState[0].country);
    expect(salaryColumn).toHaveTextContent(initialState[0].salary.toLocaleString());
    expect(actionColumn).toHaveTextContent('Edit');
  });

  it('Should change the path to edit employee when clicks on Edit Btn', () => {
    let testLocation;

    const { getByTestId } = render(
      <MemoryRouter initialEntries={['/']}>
        <ListItem item={initialState[0]} />
        <Route
          path="*"
          render={({ history, location }) => {
            testLocation = location;
            return null;
          }}
        />
      </MemoryRouter>
    );
    const actionColumn = getByTestId('action');

    fireEvent.click(actionColumn.firstChild);

    expect(testLocation.pathname).toBe(`/edit/${initialState[0].id}`);
  });
});
