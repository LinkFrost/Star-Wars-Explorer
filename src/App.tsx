import React, { useEffect } from "react";
import { useState } from "react";
import Header from "./Components/Header";
import Explorer from "./Components/Explorer";
import "./index.css";

function App() {
  const [searchQuery, setSearchQuery] = useState<String>("");
  const [attribute, setAttribute] = useState<String>("people");

  return (
    <div className="App flex flex-col justify-center items-center">
      <main className="flex flex-col justify-center items-center max-w-xs sm:max-w-lg mt-8">
        <Header></Header>
        <div className="bg-sw-yellow shadow-yellow-200 w-full px-5 py-2 rounded-xl mb-6">
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
        <p className="text-md">
          <b>How to use:</b> Use the dropdown menu to search from the following categories: movies, characters, planets, species, starships, and vehicles. Please note that SWAPI only includes characters from the OT era scrapped from Wookiepedia, so a lot of newer characters might be missing. So if it does not show up, please contact @xlinkfrostx on
          Twitter <i>(the API might be replaced at some point)</i>.
        </p>
      </main>
    </div>
  );
}

export default App;
