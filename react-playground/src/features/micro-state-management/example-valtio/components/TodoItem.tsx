import {
  removeTodo,
  toggleTodo,
} from '@/features/micro-state-management/example-valtio/modules/todoUtils';
import { Todo } from '@/features/micro-state-management/example-valtio/types/Todo';
import { memo } from 'react';

interface Props extends Todo {}

function TodoItem({ id, title, done }: Props) {
  console.log('<TodoItem/> with title', title, 're-rendered');

  return (
    <div>
      <input
        type="checkbox"
        checked={done}
        onChange={() => {
          toggleTodo(id);
        }}
      />
      <span
        style={{
          textDecoration: done ? 'line-through' : 'none',
        }}
      >
        {title}
      </span>
      <button
        onClick={() => {
          removeTodo(id);
        }}
      >
        삭제
      </button>
    </div>
  );
}

const MemoedTodoItem = memo(TodoItem);

export default MemoedTodoItem;
