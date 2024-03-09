/* eslint-disable react-refresh/only-export-components */
import {
  Component1,
  Component2,
} from '@/features/micro-state-management/subscription-model/components/ComponentsWithCallbackSet';
import {
  ComponentWithUseStore1,
  ComponentWithUseStore2,
} from '@/features/micro-state-management/subscription-model/components/ComponentsWithUseStore';
import { createContainer } from '@/features/micro-state-management/subscription-model/modules/useStore';

const ScreenSubscriptionModel = () => {
  const { getState, setState } = createContainer({ count: 0 });

  const handleClick = () => {
    setState((state) => ({ ...state, count: state.count + 1 }));
  };

  return (
    <div>
      <button onClick={handleClick}>current count: {getState().count}</button>
      <p>반복된 setState callback set 을 이용한 컴포넌트</p>
      <Component1 />
      <Component2 />
      <br />
      <p>useStore 를 사용한 컴포넌트</p>
      <ComponentWithUseStore1 />
      <ComponentWithUseStore2 />
    </div>
  );
};

export default ScreenSubscriptionModel;
