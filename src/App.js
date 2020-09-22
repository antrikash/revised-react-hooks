import React from "react";
import "./styles.css";

import CounterHook from "./Components/CounterHook";
// import EffectCounterHook from "./Components/EffectCounterHooks";
import ToggleEffectCounterHooks from "./Components/ToggleEffectCounterHooks";
import FetchingData from "./Components/FetchingData";
import MemoCounter from "./Components/MemoCounter";

export const languageContext = React.createContext();
function App() {
  return (
    <languageContext.Provider value="English">
      <div className="App">
        <div>
          <strong>USE STATE - USE REF STARTS HERE</strong>
        </div>
        <CounterHook />
        <div>
          <strong>USE EFFECT STARTS HERE</strong>
        </div>
        <ToggleEffectCounterHooks />
        {/* <EffectCounterHook /> */}
        <div>
          <strong>Fetch data using AXIOS and USE EFFECT STARTS HERE</strong>
        </div>
        <FetchingData />
        <div>
          <strong> USE MEMO STARTS HERE</strong>
        </div>
        <MemoCounter />
      </div>
    </languageContext.Provider>
  );
}

export default App;
