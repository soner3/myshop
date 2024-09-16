"use client";

import { applyDarkMode, applyLightMode } from "@/lib/theme";
import { BsBrightnessHigh, BsMoonStars } from "react-icons/bs";

export default function ToggleTheme() {
  function changeToDark() {
    applyDarkMode();
  }

  function changeToLight() {
    applyLightMode();
  }

  return (
    <div className="flex">
      <button className="" onClick={changeToLight}>
        <BsBrightnessHigh />
      </button>
      <button onClick={changeToDark}>
        <BsMoonStars />
      </button>
    </div>
  );
}
