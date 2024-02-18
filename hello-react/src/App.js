import { Component } from "react";
import "./App.css";
import MyComponent from "./MyComponent";
import Counter from "./Counter";
import Say from "./Say";
import EventPractice from "./EventPractice";
import ValidationSample from "./ValidationSample";
import ScrollBox from "./ScrollBox";
import IterationSample from "./IterationSample";
import LifeCycleSample from "./LifeCycleSample";
import ErrorBoundary from "./ErrorBoundary";

// 함수형 컴포넌트
// function App() {
//   const name = "리액트";
//   return (
//     <>
//       {/* sdf */}
//       <div
//         className="react" // dfdf
//       >
//         {name}
//       </div>
//       <input />
//     </>
//   );
// }

function getRandomColor() {
  return "#" + Math.floor(Math.random() * 16777215).toString(16);
}

// 클래스형 컴포넌트
class App extends Component {
  state = {
    color: "#000000",
  };

  handleClick = () => {
    this.setState({
      color: getRandomColor(),
    });
  };

  render() {
    // const name = "react";

    // return <div className="react">{name}</div>;
    return (
      // <MyComponent name="Reacttt" favoriteNumber={1}>
      //   리액트
      // </MyComponent>
      // <Counter />
      // <Say />
      // <EventPractice />
      // <ValidationSample />

      // <div>
      //   <ScrollBox ref={(ref) => (this.scrollBox = ref)} />
      //   {/* 1. 미리 함수를 생성해놓고 이밴트 발생 시 내부함수를 호출하는 방법 */}
      //   <button onClick={() => this.scrollBox.scrollToBottom()}>
      //     맨밑으로
      //   </button>
      //   {/* 2. 렌더링할 때 함수를 선언하는 방밥 >>> 컴포넌트가 렌더링된 상태가 아니기 때문에 undefined 발생 */}
      //   {/* <button onClick={this.scrollBox.scrollToBottom}>맨밑으로</button> */}
      // </div>

      // <IterationSample />

      <div>
        <button onClick={this.handleClick}>랜덤 색상</button>
        <ErrorBoundary>
          <LifeCycleSample color={this.state.color} />
        </ErrorBoundary>
      </div>
    );
  }
}

// const whiteDog = new WhiteDog();
// const blackDog = new BlackDog();
// whiteDog.bark();
// blackDog.bark();

// function BlackDog() {
//   this.name = "흰둥이";
//   return {
//     name: "검둥이",
//     bark: function () {
//       console.log("BlackDog " + this.name + ": 멍멍!");
//     },
//   };
// }

// function WhiteDog() {
//   this.name = "흰둥이";
//   return {
//     name: "검둥이",
//     bark: () => {
//       console.log("WhiteDog " + this.name + ": 멍멍!");
//     },
//   };
// }

export default App;
