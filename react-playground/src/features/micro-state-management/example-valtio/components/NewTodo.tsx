import { createTodo } from '@/features/micro-state-management/example-valtio/modules/todoUtils';
import React from 'react';

function NewTodo() {
  const [text, setText] = React.useState('');
  const onClick = () => {
    createTodo(text);
    setText('');
  };

  return (
    <div>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button onClick={onClick}>추가</button>
    </div>
  );
}

export default NewTodo;
