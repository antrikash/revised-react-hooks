// used feature useState in this functional component.

import React, { useState, useRef, useEffect } from "react";

const CounterHook = () => {
  const initialCount = 0;
  const [count, setCount] = useState(initialCount);
  const [name, setName] = useState({ firstName: "", lastName: "" });
  const [items, setItems] = useState([]);

  const inputRef = useRef();

  const addItem = () => {
    setItems([
      ...items,
      {
        id: items.length,
        value: Math.floor(Math.random() * 10 + 1)
      }
    ]);
  };

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <main>
      <h3>Count: {count}</h3>
      <button onClick={() => setCount((prevCount) => prevCount + 1)}>
        Increment
      </button>
      <button onClick={() => setCount((prevCount) => prevCount - 1)}>
        Decrement
      </button>
      <br />
      <button onClick={() => setCount(initialCount)}>Reset</button>
      <br />
      <br />

      <label htmlFor={name.firstName}>FirstName: </label>
      <input
        type="text"
        ref={inputRef}
        value={name.firstName}
        onChange={(e) => setName({ ...name, firstName: e.target.value })}
      />
      <br />
      <br />

      <label htmlFor={name.lastName}>LastName: </label>
      <input
        type="text"
        value={name.lastName}
        onChange={(e) => setName({ ...name, lastName: e.target.value })}
      />

      <p>{JSON.stringify(name)}</p>
      <br />
      <br />
      <button onClick={addItem}>Add item</button>
      <ul>
        {items.map((item) => (
          <li key={item.id}>{item.value}</li>
        ))}
      </ul>
    </main>
  );
};

export default CounterHook;
