import React from "react";
import { render, screen, cleanup } from "@testing-library/react";
import renderer from "react-test-renderer";
import { Todo, TodoProps } from "../todo";

afterEach(() => {
  cleanup();
});

test("should render non-completed todo component", () => {
  const mockProps: TodoProps = { id: 1, title: "task-1", completed: false };
  render(<Todo todo={mockProps} />);
  const todoElement = screen.getByTestId("todo-1");
  expect(todoElement).toBeInTheDocument();
  expect(todoElement).toHaveTextContent("task-1");
  expect(todoElement).not.toContainHTML("<strong>");
});

test("should render completed todo component", () => {
  const mockProps: TodoProps = { id: 2, title: "task-2", completed: true };
  render(<Todo todo={mockProps} />);
  const todoElement = screen.getByTestId("todo-2");
  expect(todoElement).toBeInTheDocument();
  expect(todoElement).toHaveTextContent("task-2");
  expect(todoElement).toContainHTML("<strong><h1>task-2</h1></strong>");
});

test("matches snapshot", () => {
  const mockProps: TodoProps = { id: 2, title: "task-2", completed: true };
  const tree = renderer.create(<Todo todo={mockProps} />).toJSON();
  console.log(tree);
  expect(tree).toMatchSnapshot();
});
