// src/__tests__/TodoList.test.js
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import TodoList from './TodoList'; // Ensure the path is correct based on your project structure

describe('TodoList Component', () => {
  // Test to verify that the TodoList component renders with initial todos
  test('renders TodoList with initial todos', () => {
    render(<TodoList />);
    
    // Check that the initial todos are rendered correctly
    expect(screen.getByText(/Learn React/i)).toBeInTheDocument();
    expect(screen.getByText(/Build Todo App/i)).toBeInTheDocument();
    expect(screen.getByText(/Write Tests/i)).toBeInTheDocument();
  });

  // Test to verify that a new todo can be added
  test('adds a new todo', () => {
    render(<TodoList />);
    const input = screen.getByPlaceholderText('Add a new todo');
    const addButton = screen.getByText(/Add/i);

    // Simulate user input and form submission
    fireEvent.change(input, { target: { value: 'New Todo' } });
    fireEvent.click(addButton);

    // Verify that the new todo is added to the list
    expect(screen.getByText(/New Todo/i)).toBeInTheDocument();
  });

  // Test to verify that a todo item can be toggled between completed and not completed
  test('toggles todo completion status', () => {
    render(<TodoList />);
    const todoItem = screen.getByText(/Learn React/i);

    // Check that the todo is not completed initially
    expect(todoItem).not.toHaveStyle('text-decoration: line-through');

    // Toggle the completion status
    fireEvent.click(todoItem);

    // Verify that the todo item is marked as completed
    expect(todoItem).toHaveStyle('text-decoration: line-through');
  });

  // Test to verify that a todo item can be deleted
  test('deletes a todo', () => {
    render(<TodoList />);
    const todoItem = screen.getByText(/Learn React/i);
    const deleteButton = todoItem.nextSibling; // Select the delete button next to the todo

    // Delete the todo item
    fireEvent.click(deleteButton);

    // Verify that the todo item is removed from the list
    expect(todoItem).not.toBeInTheDocument();
  });
});
