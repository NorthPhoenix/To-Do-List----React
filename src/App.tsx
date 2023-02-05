import { useState } from "react";
import TODOList from "./components/TODOList";
import { Todo } from "./types/types.js";

function App() {
  const [todos, setTodos] = useState<Todo[]>([
    { check: false, value: "Clean the house" },
    { check: false, value: "Walk the dog" },
    { check: false, value: "Do the dishes" },
  ]);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const todo = form.todo.value;
    setTodos([...todos, { check: false, value: todo }]);
    form.reset();
    form.todo.focus();
  };

  const deleteChecked = () => {
    const newTodos = todos.filter((todo) => !todo.check);
    setTodos(newTodos);
  };

  const selectAll = () => {
    const newTodos = todos.map((todo) => {
      return { ...todo, check: true };
    });
    setTodos(newTodos);
  };

  const deselectAll = () => {
    const newTodos = todos.map((todo) => {
      return { ...todo, check: false };
    });
    setTodos(newTodos);
  };

  return (
    <div className="min-h-screen h-full bg-white dark:bg-gray-800 dark:text-gray-300">
      <h1 className="text-4xl text-center py-4">To-Do List</h1>
      <TODOList todos={todos} setTodos={setTodos} />
      <form onSubmit={handleSubmit} className="flex flex-col">
        <input
          className=" mx-4 my-2 p-1 border bg-gray-100 border-gray-400 dark:bg-gray-500 dark:text-gray-200 dark:border-gray-400"
          type="text"
          name="todo"
          placeholder="Today I will..."
          required
        />

        <div className="flex mx-4 gap-4 mb-3">
          <button
            type="submit"
            className="max-w-fit border py-2 px-4 bg-gray-300 border-gray-500 hover:bg-gray-400 active:bg-gray-200 dark:bg-gray-700 dark:border-gray-400 dark:hover:bg-gray-600 dark:active:bg-gray-800"
          >
            Add to The List
          </button>
          <button
            type="button"
            onClick={deleteChecked}
            className="max-w-fit border py-2 px-4 bg-gray-300 border-gray-500 hover:bg-gray-400 active:bg-gray-200 dark:bg-gray-700 dark:border-gray-400 dark:hover:bg-gray-600 dark:active:bg-gray-800"
          >
            Delete Completed
          </button>
          <button
            type="button"
            onClick={selectAll}
            className="max-w-fit border py-2 px-4 bg-gray-300 border-gray-500 hover:bg-gray-400 active:bg-gray-200 dark:bg-gray-700 dark:border-gray-400 dark:hover:bg-gray-600 dark:active:bg-gray-800"
          >
            Complete All
          </button>
          <button
            type="button"
            onClick={deselectAll}
            className="max-w-fit border py-2 px-4 bg-gray-300 border-gray-500 hover:bg-gray-400 active:bg-gray-200 dark:bg-gray-700 dark:border-gray-400 dark:hover:bg-gray-600 dark:active:bg-gray-800"
          >
            Uncomplete All
          </button>
        </div>
      </form>
    </div>
  );
}

export default App;
