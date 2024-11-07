import { useState } from 'react';

const App = () => {
  const [foo, setFoo] = useState(console.log('hello, world'));

  return (
    <div>
      <p>{foo}</p>
      <button onClick={() => setFoo(1)}>Increment</button>
    </div>
  );
};

export default App;
