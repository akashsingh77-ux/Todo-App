import { useContext } from "react";
import styles from "./WelcomeMessage.module.css"
import { TodoItemsContext } from "../store/todo-items-store";

const WelcomeMessage=()=>{
    
 const {todoItems}=useContext(TodoItemsContext);

return <h4 className={styles.welcome}>ENJOY YOUR DAY !!</h4>
};
export default WelcomeMessage;

