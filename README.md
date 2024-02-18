### You have to install everything like 'npm install' and other libraries.

---

---

# 1. vanila-redux

## - 리액트없이 쓰는 리덕스

### 1) npm install

### 2) yarn global add parcel-bundler or npm install -g parcel-bundler

### 3) yarn init -y

### 4) parcel index.html

### 5) yarn add redux(로컬에 되어있는 경우 안해도됨)

---

---

# 2. react-redux-tutorial

## - 리덕스를 사용하여 리액트 애플리케이션 상태관리하기

## - 프레젠테이셔널(UI)/컨테이너(상태관리) 컴포넌트 분리

## - 일반적인 구조 vs Ducks패턴(/modules 폴더 내 한 파일을 생성하여 액션타입, 액션생성함수, 리덕스 모두 작성)

## - export와 export default의 차이

## >>> export는 여러개 내보내기 가능, default가 붙으면 1개

## >>> import counter(export default), {increase, decrease}(export) from './counter'

### 1) npm install

### 2) yarn add redux react-redux(로컬에 되어있는 경우 안해도됨)

### 3) 크롬 확장프로그램 Redux DevTools 설치(로컬에 되어있는 경우 안해도됨)

### >>> 리덕스 개발자도구

### 4) yarn add redux-devtools-extension(로컬에 되어있는 경우 안해도됨)

### >>> 패키지를 설치하면 리덕스 스토어를 만드는 코드가 훨씬 깔끔해진다.

### 5) yarn add redux-actions(로컬에 되어있는 경우 안해도됨)

### >>> createAction : 액션생성함수를 더 짧은 코드로 작성할 수 있다.

### >>> handleActions : 리듀서를 switch/case문 대신 handleActions을 사용하여 각 액션마다 업데이트 함수를 설정할 수 있다.

### 6) yarn add immer

### >>> 모듈의 상태가 복잡해질수록(=배열이 깊이가 깊을수록) 불변성을 지키기가 까다로워지는데 immer를 사용하면 훨씬 편하게 상태를 관리할 수 있다.

### >>> produce, draft

### >>> 리듀서가 간단한 경우, 오히려 코드가 길어지므로 굳이 사용하지 않아도 무방하다.(개인적으로 안쓴게 가독성 및 이해도가 높은 것 같다)

---

---

# 3. learn-redux-middleware

## - 리액트 앱이 리덕스를 사용하고 있고 API서버와 연동되어 요청에 대한 응답을 관리해야한다면 미들웨어를 사용하여 효율적으로 상태관리를 할 수 있다.

## >>>

### 1) yarn add redux react-redux redux-actions

### >>> 리덕스를 사용하기 위한 라이브러리들 설치

### 2) yarn add redux-looger

### >>> 액션이 디스패치될 때마다 액션의 정보와 액션이 디스패치되기 전후의 상태를 콘솔에 보여주는 미들웨어를 사용할 수 있는 라이브러리

### \*\*\* 비동기 작업을 처리하는 미들웨어 사용

### 0) yarn add axios

### >>> 웹 요청을 비동기로 처리하는 방법으로 API를 호출할 때는 주로 Promise 기반 웹 클라이언트인 axios를 사용한다.

### 1) yarn add redux-thunk

### >>> 비동기 작업을 처리할 때 가장 많이 사용하는 미들웨어

### >>> 객체가 아닌 함수 형태의 액션을 디스패치

### 2) yarn add redux-saga

### >>> 비동기 작업을 처리할 때 redux-thunk 다음으로 많이 사용하는 미들웨어

### >>> 특정 액션이 디스패치되었을 때 정해진 로직에 따라 다른 액션을 디스패치시키는 규칙을 작성하여 비동기 작업을 처리

### >>> redux-thunk보다 까다로운 상황에 유리하며 제너레이터 함수를 사용

---

---
