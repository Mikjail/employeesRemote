import React from 'react';
import { render, screen } from '@testing-library/react';
import Headline from './Headline';

test('Renders title and subtitle', () => {
  const title = 'new employee';
  const subtitle = 'fill out this form';
  render(<Headline title={title} subtitle={subtitle} />);

  const titleElement = screen.getByTestId('title');
  const subtitleElement = screen.getByTestId('subtitle');

  expect(titleElement).toHaveTextContent(title);
  expect(subtitleElement).toHaveTextContent(subtitle);
});

test('Renders only title without crashing', () => {
  const title = 'new employee';
  render(<Headline title={title} />);

  const titleElement = screen.getByTestId('title');

  expect(titleElement).toHaveTextContent(title);
});
