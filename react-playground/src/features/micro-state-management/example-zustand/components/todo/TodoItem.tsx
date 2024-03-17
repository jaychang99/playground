import { useTodoStore } from '@/features/micro-state-management/example-zustand/stores/useTodoStore';
import {
  Todo,
  TodoStore,
} from '@/features/micro-state-management/example-zustand/types/TodoStore';
import React from 'react';

const selectRemoveTodo = (state: TodoStore) => state.removeTodo;
const selectToggleTodo = (state: TodoStore) => state.toggleTodo;

type Props = {
  todo: Todo;
};

export const TodoItem = ({ todo }: Props) => {
  const removeTodo = useTodoStore(selectRemoveTodo);
  const toggleTodo = useTodoStore(selectToggleTodo);

  console.log(`TodoItem with todo: ${JSON.stringify(todo)} rerendered`);

  return (
    <div>
      <input
        type="checkbox"
        checked={todo.done}
        onChange={() => toggleTodo(todo.id)}
      />
      <span
        style={{
          textDecoration: todo.done ? 'line-through' : 'none',
        }}
      >
        {todo.title}
      </span>
      <button onClick={() => removeTodo(todo.id)}>Remove</button>
    </div>
  );
};

export const MemoedTodoItem = React.memo(TodoItem);
