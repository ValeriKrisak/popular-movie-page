import React from 'react';
import { render, screen } from '@testing-library/react';
import Header from '../components/Header';
import { Provider } from 'react-redux';
import store from '../store/index'

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
  const { getByAltText } = render(
    <Provider store={store}>
      <Header />
    </Provider>
  );
  const logo = screen.getByAltText(/The movie database logo$/i);
  expect(logo).toBeInTheDocument();
});


