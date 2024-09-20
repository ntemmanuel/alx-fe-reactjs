import React from 'react';
import TodoList from './components/TodoList'; // Importing the TodoList component

function App() {
  return (
    <div className="App">
      <h1>Todo Application</h1>
      <TodoList /> {/* Rendering the TodoList component */}
    </div>
  );
}

export default App;