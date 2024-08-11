import { getRandomColor } from "@src/utils/helpers";

import { BadgeColor } from ".";

export const getColor = (color: BadgeColor) => {
  return color === "random" ? getRandomColor() : `var(--usy-color-${color})`;
};
