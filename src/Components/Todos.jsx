import { useContext, useState } from "react";
import TodoContext from "../Context/TodoContext";
import { EditNoteRounded, DeleteForeverRounded } from "@mui/icons-material";
import EditTodo from "./EditTodo";

const Todos = () => {
  const { state, dispatch } = useContext(TodoContext);
  const [searchInput, setSearchInput] = useState("");

  const todosArray = state.filter((todo) => {
    const searchText = searchInput.trim().toLowerCase();
    return searchText ? todo.content.toLowerCase().includes(searchText) : todo;
  });

  const handleTodoCompleted = (id) => {
    dispatch({ type: "TOGGLE_COMPLETED", payload: id });
  };

  const handleDeleteTodo = (id) => {
    dispatch({ type: "DELETE_TODO", payload: id });
  };

  const handleEditTodo = (id) => {
    dispatch({ type: "TOGGLE_EDIT", payload: id });
  };

  return (
    <div>
      <div className=" w-[750px] pl-[35px] mt-7 flex justify-start">
        <input
          type="text"
          placeholder="search for todos"
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
          className="border-2 text-lg px-2 py-1 rounded-lg border-red-400 outline-none w-[300px]"
        />
      </div>
      <div className="mt-4 flex flex-col gap-4">
        {todosArray.map((todo) => (
          <div
            key={todo.id}
            className="flex justify-between items-center px-5 py-2 text-xl rounded-lg bg-gray-300 w-[750px]"
          >
            <div className="text-xl flex items-center gap-3">
              <input
                type="checkbox"
                checked={todo.isComplete}
                onChange={() => handleTodoCompleted(todo.id)}
                className="w-4 h-4"
              />
              {todo.editTodo ? (
                <EditTodo key={todo.id} todo={todo} />
              ) : (
                <p
                  style={{
                    textDecoration: todo.isComplete ? "line-through" : "none",
                    fontSize: "24px",
                  }}
                >
                  {todo.content}
                </p>
              )}
            </div>

            <div className="flex gap-5 items-center">
              <div>
                {todo.editTodo ? null : (
                  <span className="text-[16px] font-bold">
                    <EditNoteRounded sx={{ paddingBottom: "2px" }} />
                    {todo.date}
                  </span>
                )}
              </div>
              <div>
                {todo.editTodo ? null : (
                  <button
                    onClick={() => handleEditTodo(todo.id)}
                    className="bg-red-400 rounded-full px-1 pb-[3px] hover:scale-105 transition-all"
                  >
                    <EditNoteRounded />
                  </button>
                )}
              </div>
              <button
                onClick={() => handleDeleteTodo(todo.id)}
                className="bg-red-400 rounded-full px-[5px] pb-[4px] hover:scale-105 transition-all"
              >
                <DeleteForeverRounded />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Todos;
