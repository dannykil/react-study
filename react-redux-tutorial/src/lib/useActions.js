import { useMemo } from 'react';
import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';

// useActions Hook 만들어서 사용하기
// 여러 개의 액션을 사용해야 하는 경우, 코드가 훨씬 깔끔하게 정리된다.
// 액션생성함수를 액션을 디스패치하는 함수로 변환
export default function useActions(actions, deps) {
  // 첫 번째 파라미터 actions > 액션생성함수로 이루어진 배열
  // 두 번째 파라미터 deps > 배열이며, 이 안에 들어있는 원소가 바뀌면 액션을 디스패치하는 함수를 새로 만들게 된다.

  const dispatch = useDispatch();
  return useMemo(
    () => {
      if (Array.isArray(actions)) {
        return actions.map((a) => bindActionCreators(a, dispatch));
      }
      return bindActionCreators(actions, dispatch);
    },
    deps ? [dispatch, ...deps] : deps,
  );
}
