import { createContext, useState } from 'react';

type CountContext = [number, React.Dispatch<React.SetStateAction<number>>];

export const CountContext = createContext<CountContext>([0, () => {}]);

type CountProvierProps = {
  children: React.ReactNode;
};

export const CountProvider = ({ children }: CountProvierProps) => {
  return (
    <CountContext.Provider value={useState(0)}>
      {children}
    </CountContext.Provider>
  );
};
