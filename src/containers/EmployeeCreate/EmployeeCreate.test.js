import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { render } from '../../utils/test.utils';
import EmployeeCreate from './EmployeeCreate';
import { initialState } from '../../store/reducers/employees';

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
});
