const logHelloWorld = () => console.log('Hello, world');

const App = () => {
  return (
    <div onClick={logHelloWorld}>
      <Button>
        <Button onClick={logHelloWorld}>Click Me!</Button>
      </Button>
    </div>
  );
};

const Button = ({ children }) => {
  return <div onClick={logHelloWorld}>{children}</div>;
};

export default App;
