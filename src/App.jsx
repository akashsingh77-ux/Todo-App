import React, { useState } from "react";
import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import TodoItems from "./components/TodoItems";
import WelcomeMessage from "./components/WelcomeMessage";
import { TodoItemsContext } from "./store/todo-items-store";
import styles from "./App.module.css";

const initialTodoItems = [];

function App() {
  const [todoItems, setTodoItems] = useState(initialTodoItems);

  const addNewItem = (itemName, itemDueDate) => {
    setTodoItems((prev) => [
      ...prev,
      {
        name: itemName,
        dueDate: itemDueDate,
      },
    ]);
  };

  const deleteItem = (todoItemName) => {
    setTodoItems((prev) =>
      prev.filter((item) => item.name !== todoItemName)
    );
  };

  return (
    <TodoItemsContext.Provider
      value={{
        todoItems,
        addNewItem,
        deleteItem,
      }}
    >
      <div className={styles.todo_container}>
        <AppName />
        <AddTodo />
        <WelcomeMessage />
        <TodoItems />
      </div>
    </TodoItemsContext.Provider>
  );
}

export default App;