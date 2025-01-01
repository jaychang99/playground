/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from 'react';

const App = () => {
  const [isButtonClicked, setIsButtonClicked] = useState(false);

  const [user, setUser] = useState({
    name: 'Mark',
    age: 39,
  });

  const handleClickIncreaseAge = () => {
    user.age = user.age + 1;
    setIsButtonClicked(true);
  };

  return (
    <div>
      <div>
        <div>Name: {user.name}</div>
        <div>Age: {user.age}</div>
      </div>

      <button onClick={handleClickIncreaseAge}>Age + 1</button>
    </div>
  );
};

export default App;
