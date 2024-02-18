import React, { useRef } from "react";

const RefSample = () => {
  const id = useRef(1);

  // 함수를 호출하는 부분이 없어 로그가 않남는데 뭘 어떻게 확인하라는건지 모르겠다
  const setId = (n) => {
    id.current = n;
    console.log(id.current);
    console.log(n);
  };
  const printId = () => {
    console.log(id.current);
  };
  return <div>refSample</div>;
};

export default RefSample;
