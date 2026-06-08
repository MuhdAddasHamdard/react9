import React from "react";

const Greetings = ({ name, age }) => {
  // object destructuring
  // const { name, age } = props;

  return (
    <>
      <div>hello, {name}. Welcome to reactjs</div>
      <p>
        the age of {name} is {age}
      </p>
    </>
  );
};

export default Greetings;
