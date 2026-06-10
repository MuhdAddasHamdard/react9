import React, { useState } from "react";

const State = () => {
  const [message, setMessage] = useState("this is a state");

  const handleClick = () => setMessage("the state is changed");
  return (
    <>
      <div>{message}</div>

      <button className="bg-blue-500 rounded p-2" onClick={handleClick}>
        change above text
      </button>
    </>
  );
};

export default State;
