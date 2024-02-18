import { combineReducers } from "redux";
import counter, { counterSaga } from "./counter";
import sample, { sampleSaga } from "./sample";
import loading from "./loading";
import { all } from "redux-saga/effects";

// 각각의 리듀서들을 루트리듀서에 추가하는 작업
const rootReducer = combineReducers({ counter, sample, loading });

export function* rootSaga() {
  yield all([counterSaga(), sampleSaga()]);
}

export default rootReducer;
