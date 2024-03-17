import { useTodoStore } from '@/features/micro-state-management/example-zustand/stores/useTodoStore';
import { TodoStore } from '@/features/micro-state-management/example-zustand/types/TodoStore';
import { useState } from 'react';

const selectAddTodo = (state: TodoStore) => state.addTodo;

export const NewTodo = () => {
  const addTodo = useTodoStore(selectAddTodo);
  const [text, setText] = useState('');
  const onClick = () => {
    addTodo(text);
    setText('');
  };

  return (
    <div>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button onClick={onClick} disabled={!text.trim()}>
        Add
      </button>
    </div>
  );
};
