import React from "react";

export const themes = {
  light: {
    color: "#fff",
    background: "##0a2351",
  },
  dark: {
    color: "#111",
    background: "#fff",
  },
};

export const ThemeContext = React.createContext("light");
