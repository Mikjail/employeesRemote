import { render, screen } from '@testing-library/react';
import Layout from './layout';

test('Renders Layout component', () => {
  render(<Layout />);

  const mainView = screen.getByTestId('main');
  const navBar = screen.getByTestId('navbar');

  expect(mainView).toBeInTheDocument();
  expect(navBar).toBeInTheDocument();
});
