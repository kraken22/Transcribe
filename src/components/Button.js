import React from "react";
import "./Button.css";
import Colors from "../utils/Colors";

const Button = ({ onClick = () => {}, text, icon, type }) => (
  <button style={{ backgroundColor: getColor(type) }} onClick={onClick}>
    {text}
  </button>
);

function getColor(type) {
  switch (type) {
    case "primary":
      return Colors.primary;

    default:
      return Colors.backgroundDark;
  }
}

export default Button;
