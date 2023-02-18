import { render, screen } from '@testing-library/react';
import App from './App';

test('renders todo list header', () => {
  render(<App />);
  const linkElement = screen.getByText(/Todo List/i);
  expect(linkElement).toBeInTheDocument();
});
