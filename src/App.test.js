import { render, screen } from '@testing-library/react';
import App from './App';
import '@testing-library/jest-dom';

test('renders about section', () => {
  render(<App />);
let aboutSectionID = screen.getByTestId("aboutSectionRender")
  expect(
    aboutSectionID
  ).toBeVisible()
});

test('renders generator', () => {
  render(<App />);
let generatorSectionID = screen.getByTestId("generatorSectionRender")
  expect(
    generatorSectionID
  ).toBeVisible()
});

test('renders buttons', () => {
  render(<App />);
let buttonContainerID = screen.getByTestId("buttonContainerID")
  expect(
    buttonContainerID,
  ).toBeVisible()
});

test('renders filters', () => {
  render(<App />);
  let filtersContainerID = screen.getByTestId("filtersContainerID")
  expect(
    filtersContainerID,
  ).toBeVisible()
});
