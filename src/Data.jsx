import { useState } from "react";

export default function Data() {
  const [name, setName] = useState(0);
  const plusFunction = () => {
    const plusCount = name + 1;
    setName(plusCount);
  };
  const minusFunction = () => {
    const plusCount = name - 1;
    setName(plusCount);
  };
  return (
    <>
      <h4>API Load Data : {name} </h4>
      <button onClick={plusFunction}>+</button>
      <button onClick={minusFunction}>-</button>
    </>
  );
}
