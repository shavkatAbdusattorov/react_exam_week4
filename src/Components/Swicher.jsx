import React, { useState } from "react";
import UseDarkSide from "../hooks/UseDarkmout"
import { DarkModeSwitch } from "react-toggle-dark-mode";

export default function Switcherrr() {
  const [colorTheme, setTheme] = UseDarkSide();
  const [darkSide, setDarkSide] = useState(
    colorTheme === "light" ? true : false
  );

  const toggleDarkMode = (checked) => {
    setTheme(colorTheme);
    setDarkSide(checked);
  };

  const defaultProperties = {
    dark: {
      circle: {
        r: 9,
      },
      mask: {
        cx: "50%",
        cy: "23%",
      },
      svg: {
        transform: "rotate(40deg)",
      },
      lines: {
        opacity: 0,
      },
    },
    light: {
      circle: {
        r: 5,
      },
      mask: {
        cx: "100%",
        cy: "0%",
      },
      svg: {
        transform: "rotate(90deg)",
      },
      lines: {
        opacity: 1,
      },
    },
    springConfig: { mass: 4, tension: 250, friction: 35 },
  };

  return (
    <>
      <DarkModeSwitch
        checked={darkSide}
        onChange={toggleDarkMode}
        size={46}
        moonColor="#808080"
        sunColor="orange"
      />
    </>
  );
}
