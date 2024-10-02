import ActionTypes from "./constants";

export const increment = () => ({
  type: ActionTypes.INCREMENT,
});

export const decrement = () => ({
  type: ActionTypes.DECREMENT,
});

export const incrementBy = (payload) => ({
  type: ActionTypes.INCREMENTBY,
  payload
});

export const decrementBy = (payload) => ({
  type: ActionTypes.DECREMENTBY,
  payload
});

export const incrementPrompt = (payload) => ({
  type: ActionTypes.INCREMENTPROMPT,
  payload
});

export const decrementPrompt = (payload) => ({
  type: ActionTypes.DECREMENTPROMPT,
  payload
});