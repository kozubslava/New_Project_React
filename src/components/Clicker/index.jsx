import React, { useState } from "react";

const Clicker = () => {
  const [clicks, setClicks] = useState(0);
  const [intervalId, setIntervalId] = useState(null);
  function handleClick() {
    // console.log("click");

    setClicks((prevClicks) => {
      return prevClicks + 1;
    });
  }

  function handleStartInterval() {
    if (!intervalId) {
      setIntervalId(setInterval(handleClick, 1000));
    }
  }
  function handleStopInterval() {
    clearInterval(intervalId);
    setIntervalId(null);
  }

  return (
    <div>
      <p>Clicks: {clicks}</p>
      <button onClick={handleClick}>Add click</button>
      <button onClick={handleStartInterval}>Start interval</button>
      <button onClick={handleStopInterval}>Stop interval</button>
    </div>
  );
};

export default Clicker;
