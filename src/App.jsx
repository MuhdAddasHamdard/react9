import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import "./App.css";
import styled from "styled-components";
import Course from "./components/Container";
function App() {
  return (
    <>
      <h1 class="text-3xl font-bold underline">Hello world!</h1>
      <Course />
    </>
  );
}

export default App;
