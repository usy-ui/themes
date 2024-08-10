import { useEffect, useRef } from "react";

import { getRandomColor } from "@src/utils";

export const useRandomColor = () => {
  const colorRef = useRef("");

  useEffect(() => {
    colorRef.current = getRandomColor();
  }, []);

  return {
    color: colorRef.current,
  };
};
