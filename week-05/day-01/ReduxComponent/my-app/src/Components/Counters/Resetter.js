import React from 'react';
import { resetCounter } from "./actionCreator";
import { useDispatch,useSelector } from "react-redux";

function Resetter(){
  const counter = useSelector(state => state.counter);
  const dispatch = useDispatch();

  return(
    <div>
      <h1>Resetter</h1>
      <p>{counter}</p>
      <button onClick = {()=> dispatch(resetCounter())}>Resetter</button>
    </div>
  )
}

export default Resetter ;