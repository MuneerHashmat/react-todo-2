import PropTypes from "prop-types";
import { useState } from "react";
import CloudDoneIcon from "@mui/icons-material/CloudDone";
import { useContext } from "react";
import TodoContext from "../Context/TodoContext";
import getDate from "../utility/date";

const EditTodo = ({ todo }) => {
  const states = useContext(TodoContext);
  const dispatch = states.dispatch;

  const [editedContent, setEditedContent] = useState(todo.content);

  const handleSaveTodo = (todoId) => {
    const currDate = getDate();
    const newPayload = { id: todoId, content: editedContent, date: currDate };
    dispatch({ type: "EDIT_TODO", payload: newPayload });
  };
  return (
    <div className="flex gap-5">
      <input
        type="text"
        value={editedContent}
        onChange={(e) => setEditedContent(e.target.value)}
        className="text-xl px-2 py-1 outline-none rounded-lg border border-gray-400 w-[450px]"
      />

      <button
        onClick={() => handleSaveTodo(todo.id)}
        className="hover:scale-105 transition-all"
      >
        <CloudDoneIcon
          sx={{
            backgroundColor: "#f87171",
            borderRadius: "50%",
            padding: "2px 5px",
            fontSize: "35px",
          }}
        />
      </button>
    </div>
  );
};

EditTodo.propTypes = {
  todo: PropTypes.object,
};

export default EditTodo;
