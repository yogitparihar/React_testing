import React, { useReducer } from "react";
const initialState = 0;
const reducer = (state, action) => {
  switch (action) {
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;
    default:
      return state;
  }
};

export const Counter = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
        <p>{state}</p>
      <button onClick={()=>dispatch('increment',1)}>Increment</button>
      <button>Decrement</button>
      <button>Reset</button>
    </div>
  );
};
