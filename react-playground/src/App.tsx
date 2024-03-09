import './App.css';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { Navbar } from '@/components/navbar/Navbar';
import { ROUTES } from '@/constants/routes';
import { useState } from 'react';

function App() {
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);
  const handleClick = () => {
    setIsNavbarOpen((prev) => !prev);
  };
  return (
    <BrowserRouter>
      <h1>React Playground</h1>
      <button
        onClick={handleClick}
        style={{
          position: 'fixed',
          top: 0,
          right: 0,
        }}
      >
        {isNavbarOpen ? 'Close' : 'Open'} Navbar
      </button>
      {isNavbarOpen && <Navbar />}
      <Routes>
        {ROUTES.map((route) => (
          <Route key={route.path} path={route.path} element={route.element} />
        ))}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
