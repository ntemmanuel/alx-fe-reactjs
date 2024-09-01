
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import TodoList from '../components/TodoList';

// Test rendering the TodoList component
test('renders TodoList with initial todos', () => {
  render(<TodoList />);
  // Check initial todos are rendered
  expect(screen.getByText(/Learn React/i)).toBeInTheDocument();
  expect(screen.getByText(/Build Todo App/i)).toBeInTheDocument();
  expect(screen.getByText(/Write Tests/i)).toBeInTheDocument();
});

// Test adding a new todo
test('adds a new todo', () => {
  render(<TodoList />);
  const input = screen.getByPlaceholderText('Add a new todo');
  const addButton = screen.getByText(/Add/i);

  fireEvent.change(input, { target: { value: 'New Todo' } });
  fireEvent.click(addButton);

  // Check if the new todo is added
  expect(screen.getByText(/New Todo/i)).toBeInTheDocument();
});

// Test toggling a todo item
test('toggles todo completion status', () => {
  render(<TodoList />);
  const todoItem = screen.getByText(/Learn React/i);

  // Initially should not have line-through
  expect(todoItem).not.toHaveStyle('text-decoration: line-through');

  // Toggle the todo
  fireEvent.click(todoItem);

  // Should have line-through after toggle
  expect(todoItem).toHaveStyle('text-decoration: line-through');
});

// Test deleting a todo item
test('deletes a todo', () => {
  render(<TodoList />);
  const todoItem = screen.getByText(/Learn React/i);
  const deleteButton = todoItem.nextSibling;

  // Delete the todo
  fireEvent.click(deleteButton);

  // Check that the todo is removed
  expect(todoItem).not.toBeInTheDocument();
});
