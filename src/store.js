import create from "zustand";

const useStore = create((set) => ({
  todos: [],
  addTodo: (todo) =>
    set((state) => {
      localStorage.setItem("todos", JSON.stringify([...state.todos, todo]));
      return { todos: [...state.todos, todo] };
    }),

  removeTodo: (id) =>
    set((state) => {
      const todos = state.todos.filter((todo) => todo.id !== id);
      localStorage.setItem("todos", JSON.stringify(todos));
      return { todos };
    }),

  toggleTodo: (id) =>
    set((state) => {
      const todos = state.todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      );
      localStorage.setItem("todos", JSON.stringify(todos));
      return { todos };
    }),

  setTodos: () =>
    set((_) => {
      const todos = localStorage.getItem("todos")
        ? JSON.parse(localStorage.getItem("todos"))
        : [];
      return { todos };
    }),
}));

export default useStore;
