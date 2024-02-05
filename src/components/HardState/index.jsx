import React, { useEffect, useReducer } from "react";

const initialState = {
  number: 0,
  coords: {
    x: 0,
    y: 0,
  },
};

function reducer(state, action) {
  if (action.type === "number") {
    console.log(action.type, action.type === "number");
    const newState = {
      ...state,
      number: action.payload,
    };
    return newState;
  } else if (action.type === "coords") {
    const newState = {
      ...state,
      coords: action.newCoords,
    };

    return newState;
  }
  return state;
}

const HardState = (props) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { coords, number } = state;

  function handleChange({ target: { value } }) {
    const action = { type: "number", payload: +value };

    dispatch(action);
  }

  function handleCoords({ clientX, clientY }) {
    const action = {
      type: "coords",
      newCoords: {
        x: clientX,
        y: clientY,
      },
    };
    dispatch(action);
  }

  useEffect(() => {
    document.body.addEventListener("mousemove", handleCoords);
    return () => {
      document.body.removeEventListener("mousemove", handleCoords);
    };
  }, []);

  return (
    <div>
      <p>X: {coords.x}</p>
      <p>Y: {coords.y}</p>
      <p>
        Square value of {number} is {number ** 2}
      </p>
      <label>
        <input type="number" value={number} onChange={handleChange} />
      </label>
    </div>
  );
};

export default HardState;
