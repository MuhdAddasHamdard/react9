import React from "react";

const Condition = () => {
  const isLoggedIn = false;
  return (
    <div className="flex flex-col gap-3 justify-center items-center">
      <h1>{isLoggedIn ? "welcome to the site" : "please sign in "}</h1>
      {isLoggedIn ? (
        <button
          className="text-white bg-red-500 rounded-2xl p-2.5"
          onClick={() => alert("you are logged out")}
        >
          logout
        </button>
      ) : (
        <button
          className="text-white bg-blue-500 rounded-2xl p-2.5"
          onClick={() => alert("you are logged in")}
        >
          login
        </button>
      )}

      {isLoggedIn && <p>thank you for logging in enjoy your stay</p>}
    </div>
  );
};

export default Condition;
