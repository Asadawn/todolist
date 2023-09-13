import React from "react";
import { FaTrash } from "react-icons/fa";
import { FaEdit } from "react-icons/fa";
import { FaClipboardCheck } from "react-icons/fa";
const Todolist = ({ todos, setTodos, setEditTodo }) => {
  const handleComplate = (todo) => {
    console.log("complete");
    setTodos(
      todo.map((item) => {
        if (item.id === todo.id) {
          return { ...item, complated: !item.complated };
        }
        return item;
      })
    );
  };
  const handleEdit = ({ id }) => {
    const findTodo = todos.find((todo) => todo.id === id);
    setEditTodo(findTodo);
  };

  const handleDelete = ({ id }) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };
  return (
    <div>
      {todos.map((todo) => (
        <li className="list-item" key={todo.id}>
          <input
            type="text"
            value={todo.title}
            className={`list ${todo.completed} ? "complete":""}`}
            onChange={(event) => event.preventDefault()}
          />
          <div className="btn">
            <button
              className="button-complete"
              onClick={() => handleComplate(todo)}
            >
              <FaClipboardCheck />
            </button>
            <button className="button-edit" onClick={() => handleEdit(todo)}>
              <FaEdit />
            </button>
            <button
              className="button-delete"
              onClick={() => handleDelete(todo)}
            >
              <FaTrash />
            </button>
          </div>
        </li>
      ))}
    </div>
  );
};
export default Todolist;
