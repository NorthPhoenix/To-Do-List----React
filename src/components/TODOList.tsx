import { Todo } from "../types/types.js";

function TODOList({
  todos,
  setTodos,
}: {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}) {
  const handleCheck2 = (index: number, todo: Todo) => {
    const newTodo = JSON.parse(JSON.stringify(todos));
    newTodo[index].check = !todo.check;
    setTodos(newTodo);
  };

  return (
    <ul className="flex flex-col gap-0 mx-5 my-3">
      {todos.map((todo, index) => (
        <li
          key={index}
          onClick={() => handleCheck2(index, todo)}
          className="flex flex-row gap-2 cursor-pointer py-1"
        >
          <input
            type="checkbox"
            name={index.toString()}
            checked={todo.check}
            className=""
          />
          {todo.check ? (
            <h3 className="line-through text-zinc-500 dark:text-gray-500 text text-2xl">
              {todo.value}
            </h3>
          ) : (
            <h3 className="text-2xl">{todo.value}</h3>
          )}
        </li>
      ))}
    </ul>
  );
}

export default TODOList;
