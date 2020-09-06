import React from 'react';
import { render } from '@testing-library/react';
import App from '../App';

test('renders my name', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/karthick/i);
  expect(linkElement).toBeInTheDocument();
});
