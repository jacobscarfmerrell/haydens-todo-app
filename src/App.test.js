import { render, screen } from '@testing-library/react';
import App from './App';

test("renders text that says 'todo' somewhere", () => {
  render(<App />);
  const linkElement = screen.getByText(/todo/i);
  expect(linkElement).toBeInTheDocument();
});
