import React from "react";
import Autocomplete from "./components/Autocomplete";
import "./styles.css";
import ProgressBar from "./components/ProgressBar";

const App = () => {
  return (
    <div className="App">
      <Autocomplete />
      <ProgressBar />
    </div>
  );
};

export default App;
