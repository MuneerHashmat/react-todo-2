import TodoProvider from "./Context/TodoProvider";
import CreateTodos from "./Components/CreateTodos";
import Todos from "./Components/Todos";
import ListAltIcon from "@mui/icons-material/ListAlt";
function App() {
  return (
    <>
      <TodoProvider>
        <h1 className="text-center bg-green-400 fixed w-screen text-3xl py-1">
          <ListAltIcon sx={{ fontSize: "40px", paddingBottom: "7px" }} />
          TODO LIST
        </h1>
        <div className="mx-auto pt-24 flex flex-col items-center">
          <CreateTodos />
          <Todos />
        </div>
      </TodoProvider>
    </>
  );
}

export default App;
