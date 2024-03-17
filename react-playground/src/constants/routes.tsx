import ScreenExampleZustand from '@/features/micro-state-management/example-zustand/ScreenExampleZustand';
import { ScreenGlobalStateManagementLibraries } from '@/features/micro-state-management/global-state-management-libraries/ScreenGlobalStateManagementLibraries';
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
  {
    title: '글로벌 상태 관리 라이브러리',
    path: '/micro-state-management/global-state-management-libraries',
    element: <ScreenGlobalStateManagementLibraries />,
  },
  {
    title: '사용 사례 시나리오 1: Zustand',
    path: '/micro-state-management/example-zustand',
    element: <ScreenExampleZustand />,
  },
];
