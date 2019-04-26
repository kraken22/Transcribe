import React, { useState } from "react";
import "./App.css";
import AppBar from "./components/AppBar";
import Colors from "./utils/Colors";
import NoSong from "./components/NoSong";

function App() {
  const [state, setState] = useState({ file: null });

  return (
    <div
      style={{
        height: "100vh",
        backgroundColor: Colors.background
      }}
    >
      <AppBar />
      {state.file === null && (
        <NoSong onFileSelect={file => setState({ file })} />
      )}
    </div>
  );
}

export default App;
