import { useContext } from "react";
import styles from "../App.module.css";
import { TodoItemsContext } from "../store/todo-items-store";

function TodoItem({ todoName, todoDate }) {
const {deleteItem}=useContext(TodoItemsContext)

  return (
    <div className="container">
      <div className={`row ${styles.row}`}>
        <div className="col-6">
          {todoName}
        </div>

        <div className="col-4">
          {todoDate}
        </div>

        <div className="col-2">
          <button
            className={`btn btn-danger ${styles.kgButton}` }onClick={()=>deleteItem(todoName)}
          >
            DELETE
          </button>
        </div>
      </div>
    </div>
  );
}

export default TodoItem;