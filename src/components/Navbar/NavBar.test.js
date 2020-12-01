import { render, screen } from '@testing-library/react';
import NavBar from './Navbar';

test('Renders Navbar component', () => {
  render(<NavBar />);

  const navbar = screen.getByTestId('navbar');
  const profileImage = screen.getByTestId('profile-image');
  const profileDetails = screen.getByTestId('profile-details');

  expect(navbar).toBeInTheDocument();
  expect(profileImage).toBeInTheDocument();
  expect(profileDetails).toBeInTheDocument();
});
