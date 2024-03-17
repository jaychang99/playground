import { TodoStore } from '@/features/micro-state-management/example-zustand/types/TodoStore';
import { create } from 'zustand';

export const useTodoStore = create<TodoStore>((set) => ({
  todos: [],
  addTodo: (title) => {
    const newTodo = { title, id: Date.now(), done: false };

    return set((prev) => ({
      todos: [...prev.todos, newTodo],
    }));
  },
  removeTodo: (id) =>
    set((prev) => ({ todos: prev.todos.filter((todo) => todo.id !== id) })),
  toggleTodo: (id) =>
    set((prev) => ({
      todos: prev.todos.map((todo) =>
        todo.id === id ? { ...todo, done: !todo.done } : todo,
      ),
    })),
}));
