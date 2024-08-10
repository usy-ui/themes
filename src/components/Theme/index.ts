import { usyColors } from "@src/styles";
import { camelCase, toCssVariable } from "@src/utils/format";

type ThemeProps = Partial<
  Record<
    | "colorPrimary"
    | "colorPrimaryLight"
    | "colorPrimaryDark"
    | "elementHeight"
    | "elementRadius",
    string
  >
>;

const setThemeToCssVariables = (theme: ThemeProps) => {
  const root = document.documentElement;

  Object.entries(theme).forEach(([key, value]) => {
    const varName = toCssVariable(key);
    root.style.setProperty(varName, value);
  });
};

const setThemeToUsyConstants = (theme: ThemeProps) => {
  Object.entries(theme).forEach(([key, value]) => {
    /**
     * For usyColors variables
     */

    if (key.startsWith("color")) {
      const usyColorKey = camelCase(
        key.replace("color", "")
      ) as keyof typeof usyColors;

      usyColors[usyColorKey] = value;
    }
  });
};

export const setUsyTheme = (theme: ThemeProps) => {
  setThemeToCssVariables(theme);
  setThemeToUsyConstants(theme);
};
