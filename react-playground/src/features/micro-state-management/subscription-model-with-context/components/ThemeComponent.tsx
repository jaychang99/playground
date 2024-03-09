import { createContext, useContext } from 'react';

export const ThemeContext = createContext('light');

export const ThemeComponent = () => {
  const theme = useContext(ThemeContext);
  return <p>Theme: {theme}</p>;
};
