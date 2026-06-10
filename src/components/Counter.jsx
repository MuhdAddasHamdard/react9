import React, { useState } from "react";

const Counter = () => {
  const [counter, setCounter] = useState(0);

  const plus = () => {
    setCounter(counter + 1);
  };

  const minus = () => {
    setCounter(counter - 1);
  };

  return (
    <div className="container mx-auto p-5 text-center">
      <h1>my counter</h1>
      <p>{counter}</p>
      <hr />
      <div className="flex gap-3 mx-auto justify-center">
        <button
          onClick={minus}
          className="bg-red-400 text-white px-2 rounded-full"
        >
          Minus
        </button>
        <button
          onClick={plus}
          className="bg-green-400 text-white px-2 rounded-full"
        >
          Add
        </button>
      </div>
    </div>
  );
};

export default Counter;
