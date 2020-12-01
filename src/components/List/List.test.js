import List from './List';
import { render, screen } from '../../utils/test.utils';

test('Renders EmployeeList component', () => {
  render(<List />);

  const mainView = screen.getByTestId('list');
  const thead = screen.getByTestId('thead');
  const tbody = screen.getByTestId('tbody');

  expect(mainView).toBeInTheDocument();
  expect(thead).toBeInTheDocument();
  expect(tbody).toBeInTheDocument();
});
