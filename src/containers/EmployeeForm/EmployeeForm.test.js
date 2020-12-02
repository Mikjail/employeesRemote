import React from 'react';
import { render, screen } from '@testing-library/react';
import EmloyeeForm from './EmployeeForm';

test('Renders EmployeeForm without crashing', () => {
  render(<EmloyeeForm />);
});
