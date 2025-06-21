import React from "react";
import Autocomplete from "./components/Autocomplete";
import ProgressBar from "./components/ProgressBar";
import TransferList from "./components/TransferList";
import OTPInput from "./components/OTPinput";
import TodoList from "./components/TodoList";

import "./styles.css";

const App = () => {
  return (
    <div className="App">
      <Autocomplete />
      <ProgressBar />
      <TransferList />
      <OTPInput />
      <TodoList />
    </div>
  );
};

export default App;
