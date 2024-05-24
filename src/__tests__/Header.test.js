import React from 'react';
import { render, screen } from '@testing-library/react';
import Header from '../components/Header';

test('renders constants in header menu', () => {
  render(<Header />);
  const headerMenuText = screen.getByText(/Movie/i);
  expect(headerMenuText).toBeInTheDocument();
});


