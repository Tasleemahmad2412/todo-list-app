import { useDispatch, useSelector } from "react-redux";
import { deleteTask } from "../Slice/todoSlice";

function Task() {
  const todo = useSelector((state) => state.todo);
  const dispatch = useDispatch();

  // Log the state to confirm its structure
  console.log(todo);

  return (
    <div className="task-container">
      {todo.length === 0 ? (
        <p>No tasks available</p>
      ) : (
        todo.map((todo, i) => {
          return (
            <div className="task" key={i}>
              <p>{i + 1}.</p>
              <p>{todo.task}</p>
              <button
                className="delete-btn"
                onClick={() => dispatch(deleteTask(todo.id))}
              >
                X
              </button>
            </div>
          );
        })
      )}
    </div>
  );
}

export default Task;
