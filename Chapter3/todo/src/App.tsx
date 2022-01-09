//Dependencies
import { useState, useEffect, useMemo, useCallback } from "react";
//Components
import List, { Todo } from "./List";

const initialTodos = [
  { id: 1, task: "Go Shopping" },
  { id: 2, task: "Pay to electricity bill" },
];

function App() {
  const [todoList, setTodoList] = useState(initialTodos);
  const [task, setTask] = useState("");
  const [term, setTerm] = useState("");

  const printTodoList = useCallback(() => {
    console.log("Changing todoList", todoList);
  }, [todoList]);

  useEffect(() => {
    printTodoList();
  }, [todoList, printTodoList]);

  const handleSearch = () => {
    setTerm(task);
  };

  const handleCreate = () => {
    const newTodo = {
      id: Date.now(),
      task,
    };
    //Pushing the new todo to the lsit
    setTodoList([...todoList, newTodo]);
    //Reseting input value
    setTask("");
  };

  const handleDelete = useCallback(
    (taskId: number) => {
      const newTodoList = todoList.filter((todo: Todo) => todo.id !== taskId);
      setTodoList(newTodoList);
    },
    [todoList]
  );

  const filteredTodoList = useMemo(
    () =>
      todoList.filter((todo: Todo) => {
        console.log("Filtering...");
        return todo.task.toLowerCase().includes(term.toLocaleLowerCase());
      }),
    [term, todoList]
  );

  return (
    <>
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <button onClick={handleCreate}>Create</button>
      <button onClick={handleSearch}>Search</button>
      <List todoList={filteredTodoList} handleDelete={handleDelete} />
    </>
  );
}

export default App;
