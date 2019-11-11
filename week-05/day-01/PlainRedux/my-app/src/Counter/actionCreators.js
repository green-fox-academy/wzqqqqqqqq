export const INCREASE_ACTION = 'increase';
export const INCREASE_BY_ACTION = 'increase_by';
export const DECREASE_ACTION = 'decrease';

export function increaseCounter() {
  return {
    type: INCREASE_ACTION
  }
}

export function decreaseCounter() {
  return {
    type: DECREASE_ACTION
  }
}

export function increaseCounterBy(value) {
  return {
    type: INCREASE_BY_ACTION,
    payload: value,
  }
}