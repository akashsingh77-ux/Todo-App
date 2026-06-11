import { useState,useContext} from "react";
import styles from "../App.module.css";
import { TodoItemsContext } from "../store/todo-items-store";

function AddTodo() {
const {addNewItem}=useContext(TodoItemsContext);
const [todoName,setTodoName]=useState("");
const [dueDate,setDueDate]=useState("");

const handleNameChange=(event)=>{
setTodoName(event.target.value);  
}

const handleDateChange=(event)=>{
 setDueDate(event.target.value);  
}

const handleAddButtonClicked=()=>{
addNewItem(todoName,dueDate)
setDueDate("");
setTodoName("");

}

  return (
    <div className="container">
      <div className={`row ${styles.row}`}>
        <div className="col-6">
          <input 
          className="form-control"
           type="text" 
           placeholder="Enter Todo here"
           value={todoName}
            onChange={handleNameChange}
           />
        </div>

        <div className="col-4">
          <input
           className="form-control"
            type="date" value={dueDate}
            onChange={handleDateChange}
             />
        </div>

        <div className="col-2">
         <button 
          type="button" 
          className={`btn btn-success ${styles.kgButton}`}
           onClick={(handleAddButtonClicked)} >
            Add
          </button>
        </div>


      </div>
    </div>
  );
}

export default AddTodo;