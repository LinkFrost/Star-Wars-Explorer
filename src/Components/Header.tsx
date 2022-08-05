import React from "react";
import "../index.css";
import { ReactComponent as SWLogo } from "../img/Star_Wars_logo.svg";

export default function Header() {
  return (
    <div className="flex flex-col justify-center items-center max-w-xs sm:max-w-2xl mb-5">
      <SWLogo className="max-w-xs sm:max-w-lg h-auto"></SWLogo>
      <h1 className="text-sw-yellow text-5xl sm:text-7xl mb-3">Explorer</h1>
    </div>
  );
}
