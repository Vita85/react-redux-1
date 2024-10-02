import ActionTypes from "./constants";

const initialState = {
  count: 0,
};

function counterReducer(state = initialState, action) {
  switch (action.type) {
    case ActionTypes.INCREMENT:
      return { ...state, count: state.count + 1 };
    case ActionTypes.DECREMENT:
      return { ...state, count: state.count - 1 };
    case ActionTypes.INCREMENTBY:
      return { ...state, count: state.count + action.payload };
    case ActionTypes.DECREMENTBY:
      return { ...state, count: state.count - action.payload };
    case ActionTypes.INCREMENTPROMPT:
      return { ...state, count: state.count + action.payload };
    case ActionTypes.DECREMENTPROMPT:
      return { ...state, count: state.count - action.payload};
    default:
      return state;
  }
}

export default counterReducer;
