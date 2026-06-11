import TodoItem from "./TodoItem";
import styles from "../App.module.css";
import { TodoItemsContext } from "../store/todo-items-store";
import { useContext } from "react";


const TodoItems=()=>{
    const {todoItems}=useContext(TodoItemsContext);
    
   
    return (
        <div className={styles.itemsContainer}>
            {todoItems.map((item,index)=>(
            <TodoItem 
            key={index}
            todoDate={item.dueDate}
            todoName={item.name}
           
            />
            ))}
      </div>
    );
};
export default TodoItems;