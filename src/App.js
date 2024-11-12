import React from "react";

function App() {
  return (
    <div style={{ height: "100vh" }}>
      <h1>App 2</h1>

      <iframe
        src="https://note-taking-app-six-delta.vercel.app/"
        style={{
          width: "100vw",
          height: "100vh",
          border: "none",
        }}
        title="Embedded Component"
      ></iframe>
    </div>
  );
}

export default App;
