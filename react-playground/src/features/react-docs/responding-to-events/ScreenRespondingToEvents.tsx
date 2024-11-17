const logHelloWorld = () => console.log('hello, world');
const logFoo = () => console.log('foo');
const logBar = () => console.log('bar');

const App = () => {
  const handleClick: React.MouseEventHandler<HTMLButtonElement> = (e) => {
    e.stopPropagation();
    logHelloWorld();
  };

  return (
    <div
      onClick={logHelloWorld}
      onClickCapture={logHelloWorld}
      onScroll={logBar}
    >
      <ListComponent />
      <div onClickCapture={logHelloWorld}>
        <button onClick={handleClick}>Click me</button>
      </div>
    </div>
  );
};

export default App;

const ListComponent = () => {
  return (
    <ul onScroll={logFoo} style={{ height: 50, overflowY: 'scroll' }}>
      <li>Item 1</li>
      <li>Item 2</li>
      <li>Item 3</li>
      <li>Item 4</li>
    </ul>
  );
};
