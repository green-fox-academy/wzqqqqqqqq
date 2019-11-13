import React, { useState } from "react";
import { setCounter } from "./actionCreator";
import { useDispatch } from "react-redux";

function Setter() {
  const [value, setValue] = useState("");
  const dispatch = useDispatch();

  return (
    <div>
      <h1>Setter</h1>
      <input value={value} onChange={event => setValue(event.target.value)} />
      <button onClick={() => dispatch(setCounter(value))}>Set</button>
    </div>
  );
}

export default Setter;
