import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { render } from './utils/test.utils';
import App from './App';

it('App renders without crashing', () => {
  const div = document.createElement('div');
  render(<BrowserRouter><App /></BrowserRouter>, div);
});
