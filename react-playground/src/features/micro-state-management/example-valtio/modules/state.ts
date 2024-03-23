import { proxy } from 'valtio';
import { Todo } from '@/features/micro-state-management/example-valtio/types/Todo';

type State = {
  todos: Todo[];
};

export const state = proxy<State>({
  todos: [],
});
