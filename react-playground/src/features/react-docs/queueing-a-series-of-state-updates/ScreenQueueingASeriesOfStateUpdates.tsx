import { useState } from 'react';

const App = () => {
  const [pendingItemsCount, setPendingItemsCount] = useState(0);
  const [completedItemsCount, setCompletedItemsCount] = useState(0);

  async function handleClick() {
    setPendingItemsCount(pendingItemsCount + 1);

    await delay(3000);

    setPendingItemsCount((pendingItemsCount) => pendingItemsCount - 1);

    setCompletedItemsCount(completedItemsCount + 1);
  }

  return (
    <div>
      <div>대기 중: {pendingItemsCount} 건</div>
      <div>완료: {completedItemsCount} 건</div>

      <button onClick={handleClick}>주문 넣기</button>
    </div>
  );
};

// ms 만큼의 시간이 지연된 Promise를 반환하는 함수
// 즉, 이 함수를 await 할 시 ms 만큼 로직 실행 지연
function delay(ms: number) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

export default App;
