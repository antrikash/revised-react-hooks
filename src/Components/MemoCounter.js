import React, { useState, useMemo } from "react";

const MemoCounter = () => {
  const [count, setCount] = useState(0);
  const [countTwo, setCountTwo] = useState(0);

  const incrementOne = () => {
    setCount((count) => count + 1);
  };
  const incrementTwo = () => {
    setCountTwo((countTwo) => countTwo + 1);
  };
  const isEven = useMemo(() => {
    let i = 0;
    while (i < 10000) i++;
    return count % 2 === 0;
  }, [count]);

  return (
    <div>
      <button type="button" value={count} onClick={incrementOne}>
        Counter {count}
      </button>
      <span>{isEven ? "Even" : "Odd"}</span>
      <button type="button" value={countTwo} onClick={incrementTwo}>
        Counter {countTwo}
      </button>
    </div>
  );
};
export default MemoCounter;
