import React from "react";
import "../src/styles.scss";

export const ThemeProviderDecorator = (Story) => {
  return (
    <React.StrictMode>
      <Story />
    </React.StrictMode>
  );
};
