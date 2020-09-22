import React, { useState, useEffect, useContext } from "react";

import { languageContext } from "./../App";

const EffectCounterHooks = () => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");
  const [x, setX] = useState("");

  const lang = useContext(languageContext);
  useEffect(() => {
    console.log("useEffect is triggered");
    window.addEventListener("mousemove", mouseEffect);
    document.title = `Counter is clicked ${count} times`;
    return () => {
      console.log("unmounted");
      window.removeEventListener("mousemove", mouseEffect);
    };
  }, [count]);
  const mouseEffect = (e) => {
    console.log("mouseEffect is triggered");
    setX(e.clientX);
  };
  return (
    <main>
      <h2>Count : {count} </h2>
      <button onClick={() => setCount((count) => count + 1)}>
        {" "}
        Increment Count
      </button>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <div>X: {x}</div>
      <div>{lang}</div>
    </main>
  );
};

export default EffectCounterHooks;
