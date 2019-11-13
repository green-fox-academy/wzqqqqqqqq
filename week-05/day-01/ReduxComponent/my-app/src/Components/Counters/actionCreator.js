export const INCREASE = "increase";
export const DECREASE = "decrease";
export const RESET = "reset";
export const SET = "set";

export function increaseCounter() {
  return { type: INCREASE };
}
export function decreaseCounter() {
  return { type: DECREASE };
}
export function setCounter() {
  return { type: SET };
}
export function resetCounter() {
  return { type: RESET };
}
