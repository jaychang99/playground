const initialState = {
  count: 0,
  text: 'hello',
};
type InitialState = typeof initialState;

/**
 * 어떤 객체의 어떤 프로퍼티를 변경하려고 하는지 감지할 수 있다.
 */
export const proxyObject = new Proxy<InitialState>(initialState, {
  set: (target, prop, value) => {
    console.log('start setting', prop, value);

    if (prop === 'count') {
      target[prop] = value as number;
    }

    if (prop === 'text') {
      target[prop] = value as string;
    }

    console.log('end setting', prop, value);
    return true;
  },
});
