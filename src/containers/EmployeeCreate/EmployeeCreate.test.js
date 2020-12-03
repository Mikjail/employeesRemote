import React from 'react';
import { MemoryRouter, Route } from 'react-router-dom';
import { fireEvent, render } from '../../utils/test.utils';
import EmployeeCreate, { mapDispatchToProps } from './EmployeeCreate';
import { initialState } from '../../store/reducers/employees';
import { EDIT_EMPLOYEE } from '../../store/actions/actionTypes';

describe('Testing Employee Create Component', () => {
  it('Should render edit view without crashing', () => {
    const { getByTestId } = render(
      <MemoryRouter initialEntries={['/edit/1']}>
        <EmployeeCreate match={{ params: { id: '1' } }} />
      </MemoryRouter>,
      { initialState: { employees: [...initialState] } }
    );
    const formContet = getByTestId('form-content');

    expect(formContet).toBeInTheDocument();
  });

  it('Should reder No Content Component if Employee Id does not exist in state', () => {
    const { getByTestId } = render(
      <MemoryRouter initialEntries={['/edit/5']}>
        <EmployeeCreate match={{ params: { id: '5' } }} />
      </MemoryRouter>,
      { initialState: { employees: [...initialState] } }
    );
    const noContent = getByTestId('no-content');

    expect(noContent).toBeInTheDocument();
  });

  it('Should navigate to the the Employelist', () => {
    let testLocation;
    const history = { push: jest.fn() };
    const { getByTestId } = render(
      <MemoryRouter initialEntries={['/edit/1']}>
        <EmployeeCreate history={history} match={{ params: { id: '1' } }} />
        <Route
          path="*"
          render={({ history, location }) => {
            testLocation = location;
            return null;
          }}
        />
      </MemoryRouter>,
      { initialState: { employees: [...initialState] } }
    );

    const actionColumn = getByTestId('cancel-btn');

    fireEvent.click(actionColumn.firstChild);

    expect(history.push).toHaveBeenCalled();
  });

  it('Should edit the employee', () => {
    let testLocation;
    const history = { push: jest.fn() };
    const dispatch = jest.fn();

    const { getByTestId } = render(
      <MemoryRouter initialEntries={['/edit/1']}>
        <EmployeeCreate
          history={history}
          match={{ params: { id: 1 } }}
        />
        <Route
          path="*"
          render={({ history, location }) => {
            testLocation = location;
            return null;
          }}
        />
      </MemoryRouter>,
      { initialState: { employees: [...initialState] } }
    );

    const actionColumn = getByTestId('save-btn');

    fireEvent.click(actionColumn.firstChild);

    mapDispatchToProps(dispatch).onEditEmployee();

    expect(dispatch.mock.calls[0][0]).toEqual({ type: EDIT_EMPLOYEE });
  });
});
