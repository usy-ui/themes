import { FC, ReactNode } from "react";

import { CommonCompProps } from "../../../types/common-comp.props";
import {
  WidthProps,
  HeightProps,
  MarginProps,
  PaddingProps,
} from "../../../types/styles.props";

export type CommonBoxFlexProps = {
  as?: "div" | "span";
  widthProps?: WidthProps;
  heightProps?: HeightProps;
  paddingProps?: PaddingProps;
  marginProps?: MarginProps;
  children: ReactNode;
};

export type PureBoxProps = {
  display?: "block" | "inline-block";
};

type BoxProps = CommonBoxFlexProps & PureBoxProps & CommonCompProps;

export const Box: FC<BoxProps> = ({
  display,
  widthProps,
  heightProps,
  paddingProps,
  marginProps,
  children,
}) => {
  return (
    <div
      style={{
        display,
        ...widthProps,
        ...heightProps,
        ...paddingProps,
        ...marginProps,
      }}
    >
      {children}
    </div>
  );
};
