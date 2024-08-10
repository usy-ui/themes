import { CSSProperties } from "react";

import { usyColors } from "@src/styles";
import { getRandomColor } from "@src/utils/helpers";

import { BadgeColor, BadgeType } from ".";

export const getColor = (color: BadgeColor) => {
  return color === "random" ? getRandomColor() : `var(--usy-color-${color})`;
};

export const getTypeCss = (
  colorInHex: CSSProperties["color"],
  type?: BadgeType
): CSSProperties => {
  switch (type) {
    case "filled": {
      return {
        backgroundColor: colorInHex,
        border: `2px solid ${colorInHex}`,
        color: usyColors.white,
      };
    }

    case "outline": {
      return {
        backgroundColor: "transparent",
        border: `2px solid ${colorInHex}`,
        color: colorInHex,
      };
    }

    default: {
      return {
        backgroundColor: usyColors.light3,
        border: `2px solid ${usyColors.light3}`,
        color: usyColors.black,
      };
    }
  }
};
