/**
 * WidthProps
 */

type WidthCSS = {
  width?: string;
  maxWidth?: string;
  minWidth?: string;
};

export type WidthProps = {
  widthProps?: WidthCSS;
};

/**
 * HeightProps
 */

type heightCSS = {
  height?: string;
  maxHeight?: string;
  minHeight?: string;
};

export type HeightProps = {
  heightProps?: heightCSS;
};

/**
 * MarginProps
 */

type MarginCSS = {
  marginTop?: string;
  marginRight?: string;
  marginBottom?: string;
  marginLeft?: string;
  margin?: string;
};

export type MarginProps = {
  marginProps?: MarginCSS;
};

/**
 * PaddingProps
 */

type PaddingCSS = {
  paddingTop?: string;
  paddingRight?: string;
  paddingBottom?: string;
  paddingLeft?: string;
  padding?: string;
};

export type PaddingProps = {
  paddingProps?: PaddingCSS;
};
