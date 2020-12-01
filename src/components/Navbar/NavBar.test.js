import { render, screen } from '@testing-library/react';
import NavBar from './Navbar';

test('Renders Navbar component', () => {
  render(<NavBar />);

  const navbar = screen.getByTestId('navbar');

  expect(navbar).toBeInTheDocument();

  const profileImage = screen.getByTestId('profile-image');

  expect(profileImage).toBeInTheDocument();

  const profileDetails = screen.getByTestId('profile-details');

  expect(profileDetails).toBeInTheDocument();
});
