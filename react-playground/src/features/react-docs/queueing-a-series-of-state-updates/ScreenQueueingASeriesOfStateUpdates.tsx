import { useState } from 'react';

const App = () => {
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);

  const handleClickLikePost = async () => {
    setIsButtonDisabled(true);

    setTimeout(() => {
      console.log('Post liked!');
      setIsButtonDisabled(false);
    }, 3000);
  };

  return (
    <div>
      <button disabled={isButtonDisabled} onClick={handleClickLikePost}>
        Like Post
      </button>
    </div>
  );
};

export default App;
