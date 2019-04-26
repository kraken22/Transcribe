import React from "react";
import Button from "./Button";
import Colors from "../utils/Colors";

const NoSong = () => (
  <div style={{ width: "100%" }}>
    <Button text="Open Audio File" type="primary" />
    <p style={{ textAlign: "center", color: Colors.light3 }}>
      Or drag file here...
    </p>
  </div>
);

export default NoSong;
