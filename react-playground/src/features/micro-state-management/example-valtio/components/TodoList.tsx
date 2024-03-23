import NewTodo from '@/features/micro-state-management/example-valtio/components/NewTodo';
import MemoedTodoItem from '@/features/micro-state-management/example-valtio/components/TodoItem';
import { state } from '@/features/micro-state-management/example-valtio/modules/state';
import { useSnapshot } from 'valtio';

function TodoList() {
  const { todos } = useSnapshot(state);

  console.log('<TodoList /> re-rendered');

  return (
    <div>
      {todos.map(({ id, title, done }) => (
        <MemoedTodoItem key={id} id={id} title={title} done={done} />
      ))}
      <NewTodo />
    </div>
  );
}

export default TodoList;
