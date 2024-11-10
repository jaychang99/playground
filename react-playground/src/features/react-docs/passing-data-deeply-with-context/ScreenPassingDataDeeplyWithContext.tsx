import { createContext, useContext, useState } from 'react';

interface NameContextType {
  name: string;
  setName: (name: string) => void;
}

const NameContext = createContext<NameContextType>({
  name: 'John',
  setName: () => {},
});

const App = () => {
  const [name, setName] = useState('David');

  return (
    <div>
      <NameContext.Provider
        value={{
          name,
          setName: (name) => setName(name),
        }}
      >
        <ChildComponent />
      </NameContext.Provider>
    </div>
  );
};

const ChildComponent = () => {
  return (
    <div>
      <GrandChildComponent />
    </div>
  );
};

const GrandChildComponent = () => {
  const { name, setName } = useContext(NameContext);

  return (
    <div>
      <p>{name}</p>
      <button
        onClick={() => {
          setName('Bob');
        }}
      >
        Bob 으로 이름 변경
      </button>
    </div>
  );
};

export default App;
