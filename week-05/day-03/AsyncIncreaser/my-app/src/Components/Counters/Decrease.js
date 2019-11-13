import React from 'react';
import { decreaseCounter } from "./actionCreator";
import { useDispatch,useSelector } from "react-redux";

function Decreaser() {
  const counter = useSelector(state=>state.counter);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>{counter}</h1>
      <button onClick = {()=> dispatch(decreaseCounter())}>Decrease</button>
    </div>
  )
}

export default Decreaser;