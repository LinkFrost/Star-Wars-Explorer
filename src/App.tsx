import React, { useEffect } from "react";
import { useState } from "react";
import Header from "./Components/Header";
import Explorer from "./Components/Explorer";
import "./index.css";

function App() {
  const [searchQuery, setSearchQuery] = useState<String>("");
  const [attribute, setAttribute] = useState<String>("people");

  // useEffect(() => {}, [searchQuery, attribute]);

  return (
    <div className="App flex flex-col justify-center items-center">
      <main className="flex flex-col justify-center items-center max-w-sm sm:max-w-3xl mt-12">
        <Header></Header>

        <div className="bg-sw-yellow shadow-lg shadow-yellow-200 w-full px-5 py-2 rounded-xl">
          <input
            className="px-2 rounded-xl h-8 w-full mb-5"
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                setSearchQuery(e.target.value);
                setAttribute("people");
              }
            }}
          ></input>
          <Explorer attribute={attribute} searchQuery={searchQuery}></Explorer>
        </div>
      </main>
    </div>
  );
}

export default App;
