export const INCREASE = "increase";
export const DECREASE = "decrease";
export const RESET = "reset";
export const SET = "set";
export const ASYNC_INCREASE = "async increase";

export function increaseCounter() {
  return { type: INCREASE };
}
export function decreaseCounter() {
  return { type: DECREASE };
}
export function setCounter(amount) {
  return { type: SET,amount  };
}
export function resetCounter() {
  return { type: RESET };
}

export function asyncIncreaseCounter(amount,delay){
  return (dispatch) =>{
    setTimeout(()=>dispatch({type:ASYNC_INCREASE,amount},delay))
  }

}

