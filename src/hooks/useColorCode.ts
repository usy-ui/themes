import { useMemo } from "react";

import { getRandomColor } from "@src/utils";

import { BaseColor } from "../@types/base.types";

export const useColorCode = (color: BaseColor | "random") => {
  const colorMemo = useMemo(() => {
    if (color === "random") {
      return getRandomColor();
    }

    return `var(--usy-color-${color})`;
  }, [color]);

  return {
    colorMemo,
  };
};
