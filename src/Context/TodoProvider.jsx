import { useEffect, useReducer } from "react";
import PropTypes from "prop-types";
import reducer from "../Reducer/reducer";
import TodoContext from "./TodoContext";

const TodoProvider = (props) => {
  const initialState = JSON.parse(localStorage.getItem("todos")) || [];
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(state));
  }, [state]);

  return (
    <TodoContext.Provider value={{ state, dispatch }}>
      {props.children}
    </TodoContext.Provider>
  );
};

TodoProvider.propTypes = {
  children: PropTypes.node,
};

export default TodoProvider;
