import { render, screen, fireEvent } from '@testing-library/react';
import mockAxios from 'jest-mock-axios'

import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

test('calls some endpoint on click', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  fireEvent.click(linkElement);

  mockAxios.mockResponse({ data: 'response' })
  expect(mockAxios.post).toHaveBeenCalledWith('/api/url', {some: "data"})

});
