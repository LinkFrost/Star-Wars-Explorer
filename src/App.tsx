import React from "react";
import Header from "./Components/Header";
import "./index.css";

function App() {
  return (
    <div className="App flex flex-col justify-center items-center">
      <main className="flex flex-col justify-center items-center max-w-sm sm:max-w-3xl mt-12">
        <Header></Header>
      </main>
    </div>
  );
}

export default App;
