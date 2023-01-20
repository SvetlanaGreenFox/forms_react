import React, { useState } from "react";
import Result from "./Result.js";

function ColorConverter() {
  const [state, setState] = useState({
    hex: "",
  });

  const handleInput = (event) => {
    event.preventDefault();
    const value = event.target.value;
    setState({ hex: value });
  };

  return (
    <form name="converter">
      <div className="form-wrapper">
        <input
          type="text"
          name="colorHEX"
          className="form-input"
          id="colorHEX"
          placeholder="Введите цвет"
          onChange={handleInput}
          value={state.hex}
        />
        <Result color={state.hex} />
      </div>
    </form>
  );
}

export default ColorConverter;
