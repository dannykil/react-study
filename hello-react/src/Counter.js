import { Component } from "react";

class Counter extends Component {
  //   constructor(props) {
  //     super(props);
  //     this.state = { number: 0, fixedNumber: 0 };
  //   }

  // constructor 제거가능
  state = { number: 0, fixedNumber: 0 };

  render() {
    const { number, fixedNumber } = this.state;
    return (
      <div>
        <h1>{number}</h1>
        <h2>바뀌지 않는 값 : {fixedNumber}</h2>
        <button
          onClick={() => {
            // this.setState({ number: number + 1 });
            // this.setState({ number: this.state.number + 1 });
            this.setState({ number: number + 1 }, () => {
              console.log("방금 setState가 호출됐습니다. : ", this.state);
            });

            // this.setState((prevState) => ({ number: prevState.number + 1 }));
          }}
        >
          +1
        </button>
      </div>
    );
  }
}

export default Counter;
