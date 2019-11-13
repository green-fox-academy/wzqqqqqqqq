import React, { useState } from "react";
import { asyncIncreaseCounter } from "./actionCreator";
import { useDispatch } from "react-redux";

function AsyncIncrease() {
  const [increase, setIncrease] = useState(0);
  const [delay, setDelay] = useState(0);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>Async Increaser</h1>
      <input
        type="number"
        value={increase}
        onChange={e => setIncrease(Number.parseInt(e.target.value))}
      />
      <input
        type="number"
        value={delay}
        onChange={e => setDelay(Number.parseInt(e.target.value))}
      />
      <button onClick={() => dispatch(asyncIncreaseCounter(increase, delay))}>
        Async Increase
      </button>
    </div>
  );
}

export default AsyncIncrease;
