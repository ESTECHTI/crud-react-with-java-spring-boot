import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import UserForm from './UserForm';

test('renders UserForm and submits data', () => {
  const mockSubmit = jest.fn();
  render(<UserForm onSubmit={mockSubmit} />);

  fireEvent.change(screen.getByPlaceholderText('Name'), {
    target: { value: 'John Doe' },
  });
  fireEvent.change(screen.getByPlaceholderText('Email'), {
    target: { value: 'john@example.com' },
  });

  fireEvent.click(screen.getByText('Create User'));

  expect(mockSubmit).toHaveBeenCalledWith(null, {
    name: 'John Doe',
    email: 'john@example.com',
  });
});