import React from "react";

function Result(props) {
  const { color } = props;

  const convertColor = (color) => {
    const pattern_color = "^#([A-Fa-f0-9]{6})$";
    let result = "";
    if (color.match(pattern_color)) {
      const bigint = parseInt(color.split("#")[1], 16);
      const r = (bigint >> 16) & 255;
      const g = (bigint >> 8) & 255;
      const b = bigint & 255;
      const colorRGB = "rgb(" + r + "," + g + "," + b + ")";

      result = colorRGB;
    } else {
      result = "Ошибка!";
    }
    return result;
  };

  const checkLength = (color) => {
    if (color.length < 7) return null;
    document.body.style.backgroundColor = "#FF0000";
    return "Ошибка!";
  };

  const result = color.length === 7 ? convertColor(color) : checkLength(color);

  document.body.style.backgroundColor =
    result === "Ошибка!" ? "#FF0000" : result;

  return (
    <input
      type="text"
      name="colorHEX"
      className="form-input-block"
      id="colorHEX"
      value={result}
      readonly="true"
    />
  );
}

export default Result;
