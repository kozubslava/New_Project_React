import React, { useEffect, useReducer } from "react";

const initialState = {
  number: 0,
  coords: {
    x: 0,
    y: 0,
  },
};

// функція яка поверне нове значення стану, яке реакт збереже і викличе ререндер
function reducer(state, action) {
  console.log(state, action);
  if ((action.type = "number")) {
    const newState = {
      ...state,
      number: action.payload,
    };
    return newState;
  } else if ((action.type = "coords")) {
    const newState = {
      ...state,
      coords: action.newCoords,
    };

    return newState;
  }
  return state;
}

const HardState = (props) => {
  // state - стан
  // dispatch - функція відправки
  // reducer - функція, яка оновлюе стан, приймає найсвіжіший state першим аргументом
  // і action (набір додаткових даних для зміни стану) другим аргументом
  // reducer має повертати новий стан на основі цих даних
  // initialState - початкове значення стану
  const [state, dispatch] = useReducer(reducer, initialState);
  const { coords, number } = state;

  // їх тут 5+
  // const [coords, setCoords] = useState({ x: 0, y: 0 });
  // const [number, setNumber] = useState(1);

  // тут теж 5+
  function handleChange({ target: { value } }) {
    // дані для ред'юсеру які дозволяють зрозуміти яку логіку стану використовувати
    const action = { type: "number", payload: +value };

    // відправка action каже реакту запускати ред'юсер
    dispatch(action);

    // setNumber(+value);
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
