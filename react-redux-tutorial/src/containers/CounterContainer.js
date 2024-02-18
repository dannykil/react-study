import React, { useCallback } from 'react';
// import { connect, useSelector } from 'react-redux';
import { useDispatch, useSelector } from 'react-redux';
import Counter from '../components/Counter';
import { decrease, increase } from '../modules/counter';

// const CounterContainer = ({ number, increase, decrease }) => {
//   return (
//     <Counter number={number} onIncrease={increase} onDecrease={decrease} />
//   );
// };
// export default connect((state) => ({ number: state.counter.number }), {
//   increase,
//   decrease,
// })(CounterContainer);

const CounterContainer = () => {
  // useSelector Hook을 사용하면 connect함수를 사용하지 않고도 리덕스 상태를 조회할 수 있다.
  const number = useSelector((state) => state.counter.number);

  // useDispatch Hook을 사용하면 컴포넌트 내부에서 스토어의 내장함수 dispatch를 사용할 수 있다.
  // useCallback Hook과 함께 사용하는 습관을 들일 것!!
  const dispatch = useDispatch();
  const onIncrease = useCallback(() => dispatch(increase()), [dispatch]);
  const onDecrease = useCallback(() => dispatch(decrease()), [dispatch]);

  // useStore Hook을 사용하면 컴포넌트 내부에서 리덕스 스토어 객체를 직접 사용할 수 있다.
  // 다만, 정말 어쩌다가 스토어에 직접 접근해야하는 상황에만 사용해야한다 = 흔치않음.

  return (
    <Counter number={number} onIncrease={onIncrease} onDecrease={onDecrease} />
  );
};
export default CounterContainer;
