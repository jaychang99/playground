import { ScreenSubscriptionModelWithContext } from '@/features/micro-state-management/subscription-model-with-context/ScreenSubscriptionModelWithContext';
import { ScreenSubscriptionModel } from '@/features/micro-state-management/subscription-model/ScreenSubscriptionModel';

type Route = {
  title: string;
  path: string;
  element: JSX.Element;
};

export const ROUTES: Route[] = [
  {
    title: '구독 모델',
    path: '/micro-state-management/subscription-model',
    element: <ScreenSubscriptionModel />,
  },
  {
    title: '컨텍스트를 이용한 구독 모델',
    path: '/micro-state-management/subscription-model-with-context',
    element: <ScreenSubscriptionModelWithContext />,
  },
];
