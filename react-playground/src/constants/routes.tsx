import ScreenExampleZustand from '@/features/micro-state-management/example-zustand/ScreenExampleZustand';
import { ScreenGlobalStateManagementLibraries } from '@/features/micro-state-management/global-state-management-libraries/ScreenGlobalStateManagementLibraries';
import { ScreenSubscriptionModelWithContext } from '@/features/micro-state-management/subscription-model-with-context/ScreenSubscriptionModelWithContext';
import { ScreenSubscriptionModel } from '@/features/micro-state-management/subscription-model/ScreenSubscriptionModel';
import ScreenPassingDataDeeplyWithContext from '@/features/react-docs/passing-data-deeply-with-context/ScreenPassingDataDeeplyWithContext';
import ScreenQueueingASeriesOfStateUpdates from '@/features/react-docs/queueing-a-series-of-state-updates/ScreenQueueingASeriesOfStateUpdates';
import ScreenRenderAndCommit from '@/features/react-docs/render-and-commit/ScreenRenderAndCommit';
import ScreenRespondingToEvents from '@/features/react-docs/responding-to-events/ScreenRespondingToEvents';
import ScreenStateAComponentsMemory from '@/features/react-docs/state-a-components-memory/ScreenStateAComponentsMemory';
import ScreenStateAsASnapshot from '@/features/react-docs/state-as-a-snapshot/ScreenStateAsASnapshot';
import ScreenUpdatingArraysInState from '@/features/react-docs/updating-arrays-in-state/ScreenUpdatingArraysInState';
import ScreenUpdatingObjectsInState from '@/features/react-docs/updating-objects-in-state/ScreenUpdatingObjectsInState';
import ScreenUseEffectDocs from '@/features/react-docs/use-effect/ScreenUseEffectDocs';
import ScreenUseStateDocs from '@/features/react-docs/use-state/ScreenUseStateDocs';
import ScreenUseSyncExternalStore from '@/features/react-docs/use-sync-external-store/ScreenUseSyncExternalStore';

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
  {
    title: 'useEffect 문서 읽기',
    path: '/react-docs/use-effect',
    element: <ScreenUseEffectDocs />,
  },
  {
    title: 'useState 문서 읽기',
    path: '/react-docs/use-state',
    element: <ScreenUseStateDocs />,
  },
  {
    title: 'useSyncExternalStore 문서 읽기',
    path: '/react-docs/use-sync-external-store',
    element: <ScreenUseSyncExternalStore />,
  },
  {
    title: 'Passing Data Deeply with Context 문서 읽기',
    path: '/react-docs/passing-data-deeply-with-context',
    element: <ScreenPassingDataDeeplyWithContext />,
  },
  {
    title: 'Responding to Events 문서 읽기',
    path: '/react-docs/responding-to-events',
    element: <ScreenRespondingToEvents />,
  },
  {
    title: "State: A Component's Memory 문서 읽기",
    path: '/react-docs/state-a-components-memory',
    element: <ScreenStateAComponentsMemory />,
  },
  {
    title: 'Render and Commit 문서 읽기',
    path: '/react-docs/render-and-commit',
    element: <ScreenRenderAndCommit />,
  },
  {
    title: 'State as a Snapshot 문서 읽기',
    path: '/react-docs/state-as-a-snapshot',
    element: <ScreenStateAsASnapshot />,
  },
  {
    title: 'Queueing a Series of State Updates 문서 읽기',
    path: '/react-docs/queueing-a-series-of-state-updates',
    element: <ScreenQueueingASeriesOfStateUpdates />,
  },
  {
    title: 'Updating Objects in State 문서 읽기',
    path: '/react-docs/updating-objects-in-state',
    element: <ScreenUpdatingObjectsInState />,
  },
  {
    title: 'Updating Arrays in State 문서 읽기',
    path: '/react-docs/updating-arrays-in-state',
    element: <ScreenUpdatingArraysInState />,
  },
];
