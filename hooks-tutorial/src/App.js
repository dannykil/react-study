import React, { useState } from "react";
import Average from "./Average";
import Counter from "./Counter";
import Info from "./Info";
import RefSample from "./RefSample";

const App = () => {
  // const [visible, setVisible] = useState(false);

  return (
    <div>
      {/* <Counter /> */}
      <Info />
      {/* <Average /> */}
      {/* <RefSample /> */}
      {/* <button
        onClick={() => {
          setVisible(!visible);
        }}
      >
        {visible ? "숨기기" : "보이기"}
      </button>
      <hr />
      {visible && <Info />} */}
    </div>
  );
};

export default App;
