/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from 'react';

const App = () => {
  const [user, setUser] = useState({
    user: {
      name: 'John',
      age: 25,
    },
    book: {
      title: 'The Great Gatsby',
      publishedIn: 1925,
      author: {
        name: 'F. Scott Fitzgerald',
        bornIn: 1896,
      },
    },
  });

  const handleButtonClick = () => {
    setUser({
      ...user,
      user: {
        ...user.user,
        age: 26,
      },
      book: {
        ...user.book,
        publishedIn: 1926,
      },
    });
  };

  console.log('User Updated');

  return (
    <div>
      <button onClick={handleButtonClick}>Update User</button>
      <p>{`User name: ${user.user.name}`}</p>
      <p>{`User age: ${user.user.age}`}</p>
      <p>{`Book title: ${user.book.title}`}</p>
      <p>{`Book published in: ${user.book.publishedIn}`}</p>
    </div>
  );
};

export default App;
