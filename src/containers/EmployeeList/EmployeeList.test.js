import EmployeeList from './EmployeeList';
import { render, screen } from '../../utils/test.utils';
import { initialState } from '../../store/reducers/employees';

beforeEach(() => {
  // Setup compoonent
  render(<EmployeeList />, { initialState: { employees: [...initialState] } });
});

test('Renders EmployeeList component', () => {
  const mainView = screen.getByTestId('employees-list');

  expect(mainView).toBeInTheDocument();

  const headline = screen.getByTestId('headline');

  expect(headline).toBeInTheDocument();

  const addBtn = screen.getByTestId('add-btn');

  expect(addBtn).toHaveTextContent('Add Employee');
});

test('Checking employees counter', () => {
  const counter = screen.getByTestId('counter');

  expect(counter).toHaveTextContent('3');
});
