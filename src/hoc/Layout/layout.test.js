import { render, screen } from '@testing-library/react';
import Layout from './layout';

test('Renders Layout component', () => {
  render(<Layout />);

  const mainView = screen.getByTestId('main');

  expect(mainView).toBeInTheDocument();

  const navBar = screen.getByTestId('navbar');

  expect(navBar).toBeInTheDocument();
});
