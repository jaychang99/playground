import ScreenSubscriptionModel from './features/micro-state-management/subscription-model/ScreenSubscriptionModel';
import './App.css';
import { Routes, Route, BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <h1>React Playground</h1>
      <Routes>
        <Route
          path="/micro-state-management/subscription-model"
          element={<ScreenSubscriptionModel />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
