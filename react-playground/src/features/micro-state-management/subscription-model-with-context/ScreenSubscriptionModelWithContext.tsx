import { CounterComponent } from '@/features/micro-state-management/subscription-model-with-context/components/CounterComponent';
import {
  ThemeComponent,
  ThemeContext,
} from '@/features/micro-state-management/subscription-model-with-context/components/ThemeComponent';
import { StoreProvider } from '@/features/micro-state-management/subscription-model-with-context/contexts/storeContext';

export const ScreenSubscriptionModelWithContext = () => {
  return (
    <div>
      <h2>컨텍스트 복습</h2>
      <ThemeContext.Provider value="dark">
        <ThemeContext.Provider value="light">
          <ThemeComponent />
        </ThemeContext.Provider>
      </ThemeContext.Provider>
      <h2>컨텍스트를 이용한 구독 모델</h2>
      <h3>Provider 없이 기본 Store 사용</h3>
      <CounterComponent />
      <CounterComponent />
      <StoreProvider initialState={{ count: 10 }}>
        <h3>Provider를 이용한 Store 사용</h3>
        <CounterComponent />
        <CounterComponent />
        <StoreProvider initialState={{ count: 20 }}>
          <h3>Provider 중첩 사용</h3>
          <CounterComponent />
          <CounterComponent />
        </StoreProvider>
      </StoreProvider>
    </div>
  );
};
