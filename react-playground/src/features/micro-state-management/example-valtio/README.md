# Valtio 예제

## Valtio 기본 철학

---

- Valtio 는 Zustand 나 Jotai 와 다르게 '변경 가능한 모델' 을 기반으로 한다.

  - **변경 가능한 모델** 이란?

    - 객체, 배열같은 store 나 store 내부의 자료가 있을 때, 이것의 내부 내용만을 직접 변경하는 것을 의미한다.
    - 새로운 것으로 덮어쓴다는 의미와 반대된다. 아래 예시를 보자.

      - [변경 가능] 하게 쓴 사례

        ```tsx
        const array = ['hi', 'my', 'name', 'is'];
        array[1] = 'your'; // 그냥 그 자리의 내용을 바꾸면 된다. (mutable)
        ```

      - [변경 불가능] 하게 쓴 사례

        ```tsx
        const array = ['hi', 'my', 'name', 'is'];
        const newList = [...list.slice(0, 1), 'your', ...list.slice(2)]; // 새로운 배열을 반든다 (immutable 한 배열이라고 생각한다. )
        ```

- 또한 valtio 는 내부적으로 어떤 값이 참조되느냐에 따라 알아서 렌더링 최적화를 해 준다.
  - 즉, selector 함수를 개발자가 수동으로 전달해주지 않아도 된다.
  - 앞 장에서 배운 `useTrackedState()` 또는 그 비슷한 것이 사용될 것이다.
