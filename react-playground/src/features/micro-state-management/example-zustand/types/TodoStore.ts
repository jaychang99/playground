export type Todo = {
  id: number;
  title: string;
  done: boolean;
};

type TodoStoreState = {
  todos: Todo[];
};

type TodoStoreAction = {
  addTodo: (title: string) => void;
  removeTodo: (id: number) => void;
  toggleTodo: (id: number) => void;
};

export type TodoStore = TodoStoreState & TodoStoreAction;
