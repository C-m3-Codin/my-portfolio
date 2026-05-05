import { render, screen } from '@testing-library/react';
import App from './App';

test('renders name Cyril Paul', () => {
  render(<App />);
  const linkElement = screen.getByText(/Cyril Paul/i);
  expect(linkElement).toBeInTheDocument();
});
