import { state } from '@/features/micro-state-management/example-valtio/modules/state';

export const createTodo = (title: string) => {
  state.todos.push({
    id: String(Date.now()), // nanoid 를 써도 되지만, 여기서는 간단하게 Date.now() 를 사용
    title,
    done: false,
  });
};

export const removeTodo = (id: string) => {
  // return state.todos.filter(todo => todo.id !== id); -> 불변 모델이라면 이렇게 하겠지.

  const index = state.todos.findIndex((todo) => todo.id === id);
  state.todos.splice(index, 1); // 하지만 valtio  와 함께라면, 직접 변경해도 됨!
};

export const toggleTodo = (id: string) => {
  const index = state.todos.findIndex((todo) => todo.id === id);
  state.todos[index].done = !state.todos[index].done;
};
