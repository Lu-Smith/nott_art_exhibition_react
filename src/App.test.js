import { render, screen } from '@testing-library/react';
import App from './App';

// header 
test('it should have a correct header', () => {
  render(<App />);
  const elementTitle = screen.getByText("Nott");
  expect(elementTitle).toBeInTheDocument();

  const elementMotto = screen.getByText("connect the past, the present and the future");
  expect(elementMotto).toBeInTheDocument();
});

//main

test('it should have a correct title', () => {
  render(<App />);
  const title = screen.getByText("Search though time");
  expect(title).toBeInTheDocument();

  const button = screen.getByText("Scroll to explore");
  expect(button).toBeInTheDocument();

  const motto = screen.getByText("We live in the endless loop of wonders.");
  expect(motto).toBeInTheDocument();
});


//footer
test('it should have a correct footer', () => {
  render(<App />);
  const elementLink = screen.getByText("Buy art");
  expect(elementLink).toBeInTheDocument();

  const elementMotto = screen.getByText("the most important moment in time is now");
  expect(elementMotto).toBeInTheDocument();
});