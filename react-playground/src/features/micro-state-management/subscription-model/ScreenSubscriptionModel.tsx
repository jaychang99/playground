/* eslint-disable react-refresh/only-export-components */
let state = {
  count: 0,
};

type State = typeof state;
type NextState = State | ((state: State) => State);

export const getState = () => state;
export const setState = (nextState: NextState) => {
  // state = nextState; -> 함수로 state update 를 시도할 수 있으므로... 아래 코드 사용
  state = typeof nextState === 'function' ? nextState(state) : nextState;
};

const ScreenSubscriptionModel = () => {
  return <div>ScreenSubscriptionModel</div>;
};

export default ScreenSubscriptionModel;
