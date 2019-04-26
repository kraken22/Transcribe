import React from "react";
import Colors from "../utils/Colors";

const AppBar = ({ title = "Transcribe" }) => (
  <div
    style={{
      "-webkit-app-region": "drag",
      backgroundColor: Colors.backgroundDark,
      height: 19,
      textAlign: "center",
      color: Colors.light3,
      padding: "1.5px 0",
      width: "100%"
    }}
  >
    {title}
  </div>
);

export default AppBar;
