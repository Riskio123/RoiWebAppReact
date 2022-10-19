/** @format */

import { createContext } from "react";

export const backgroundColors = {
  primary: "primary",
  blue: "blue",
  green: "green",
  gold: "gold",
};

export const BackgroundColorContext = createContext({
  color: backgroundColors.primary,
  changeColor: color => {},
});
