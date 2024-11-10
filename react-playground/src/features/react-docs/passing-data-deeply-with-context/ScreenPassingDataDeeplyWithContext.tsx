import { createContext, useContext } from 'react';

const NameContext = createContext('John');

const App = () => {
  return (
    <div>
      <NameContext.Provider value="David">
        <ChildComponent />
      </NameContext.Provider>
    </div>
  );
};

const ChildComponent = () => {
  const name = useContext(NameContext);

  return (
    <NameContext.Provider value="Alice">
      <p>{name}</p>
    </NameContext.Provider>
  );
};

export default App;
