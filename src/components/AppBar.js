import React from "react";
import Colors from "../utils/Colors";

const AppBar = ({ title = "Transcribe" }) => (
  <div
    style={{
      "-webkit-app-region": "drag",
      backgroundColor: Colors.background,
      height: 19,
      textAlign: "center",
      color: Colors.light,
      padding: 1.5
    }}
  >
    {title}
  </div>
);

export default AppBar;
