import { createContext, useContext } from 'react';

const NameContext = createContext('John');

const App = () => {
  return (
    <div>
      <ChildComponent />
    </div>
  );
};

const ChildComponent = () => {
  const name = useContext(NameContext);

  return <p>{name}</p>;
};

export default App;
