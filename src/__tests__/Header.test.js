import React from 'react';
import { render, screen } from '@testing-library/react';
import Header from '../components/Header';

beforeAll(() => {
  Object.defineProperty(window, 'scrollY', { writable: true, value: 0 });
  window.addEventListener = jest.fn((event, callback) => {
    if (event === 'scroll') {
      callback();
    }
  });
  window.removeEventListener = jest.fn();
});

test('renders constants in header menu', () => {
  render(<Header />);
  const logo = screen.getByAltText(/The movie database logo$/i);
  expect(logo).toBeInTheDocument();
});


