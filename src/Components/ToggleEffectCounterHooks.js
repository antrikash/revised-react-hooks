import React, { useState } from "react";

import EffectCounterHooks from "./EffectCounterHooks";

const ToggleEffectCounterHook = () => {
  const [display, setDisplay] = useState(true);
  return (
    <div>
      <button onClick={() => setDisplay(!display)}>Toggle Button</button>
      {display && <EffectCounterHooks />}
    </div>
  );
};

export default ToggleEffectCounterHook;
