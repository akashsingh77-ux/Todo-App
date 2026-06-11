# Todo App 🚀

A streamlined, fully responsive task management web application designed to help users organize their daily schedules. This project highlights modern frontend structural patterns, state distribution without prop-drilling, and component-specific styling abstractions.

---

## 🚀 Live Demo

🔗 **[Click Here to View Live Deployment]([Todo-app-omega-roan.vercel.app](https://todo-app-omega-roan.vercel.app/))**

---

## 🛠️ Tech Stack & Technologies Used

* **Frontend Library:** React.js (Vite workflow)
* **Global State Management:** React Context API (`createContext` + `Context.Provider`)
* **Styling & Responsive Grids:** Bootstrap 5 (Utility rows/columns)
* **CSS Scoping:** CSS Modules (`*.module.css`) for localized component styling

---

## ⚙️ Architecture & Data Flow Highlights

* **Context-Driven Architecture:** The application utilizes a centralized `TodoItemsContext` to store task states globally. Actions like adding tasks (`addNewItem`) and deleting tasks (`deleteItem`) are distributed efficiently to child components without prop-drilling.
* **Functional Component Abstraction:** UI logic is modularly broken down into dedicated functional components including `AddTodo` (controlled input management), `TodoItems` (dynamic item rendering via arrays), and `WelcomeMessage` (conditional layout states).
* **Scoped Styling with Modules:** Avoids global namespace pollution by pairing explicit Bootstrap utility grids with localized CSS Modules to handle item containers, specific button constraints, and view parameters cleanly.

---

## 💻 Local Setup & Installation

Follow these steps to get a local copy of this project running on your machine:

### 1. Clone the repository
```bash
git clone https://github.com/akashsingh77-ux/3-todo-app.git
