import {
  ThemeComponent,
  ThemeContext,
} from '@/features/micro-state-management/subscription-model-with-context/components/ThemeComponent';

export const ScreenSubscriptionModelWithContext = () => {
  return (
    <div>
      <h2>컨텍스트 복습</h2>
      <ThemeContext.Provider value="dark">
        <ThemeContext.Provider value="light">
          <ThemeComponent />
        </ThemeContext.Provider>
      </ThemeContext.Provider>
    </div>
  );
};
