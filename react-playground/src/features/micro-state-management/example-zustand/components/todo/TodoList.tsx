import { MemoedTodoItem } from '@/features/micro-state-management/example-zustand/components/todo/TodoItem';
import { useTodoStore } from '@/features/micro-state-management/example-zustand/stores/useTodoStore';
import { TodoStore } from '@/features/micro-state-management/example-zustand/types/TodoStore';

const selectTodos = (state: TodoStore) => state.todos;

export const TodoList = () => {
  const todos = useTodoStore(selectTodos);

  return (
    <div>
      {todos.map((todo) => {
        return <MemoedTodoItem key={todo.id} todo={todo} />;
      })}
    </div>
  );
};
