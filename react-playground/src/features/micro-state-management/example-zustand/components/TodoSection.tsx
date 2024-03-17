import { NewTodo } from '@/features/micro-state-management/example-zustand/components/todo/NewTodo';
import { TodoList } from '@/features/micro-state-management/example-zustand/components/todo/TodoList';

export const TodoSection = () => {
  return (
    <div>
      <h2>Todo Section</h2>
      <NewTodo />
      <TodoList />
    </div>
  );
};
