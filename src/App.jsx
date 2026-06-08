import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import "./App.css";
import Greetings from "./components/Greetings";

function App() {
  return (
    <>
      <Greetings name="Khan" age="23" />
      <Greetings name="sara" age="43" />
    </>
  );
}

export default App;
