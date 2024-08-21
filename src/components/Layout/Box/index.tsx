import { FC, ReactNode } from "react";

import clsx from "clsx";

import { BaseTag } from "../../..//@types/base.types";
import { CommonCompProps } from "../../../@types/common-comp.props";
import {
  WidthProps,
  HeightProps,
  MarginProps,
  PaddingProps,
} from "../../../@types/styles.props";

export type CommonBoxFlexProps = {
  tag?: BaseTag;
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
  tag: Tag = "div",
  display,
  widthProps,
  heightProps,
  paddingProps,
  marginProps,
  children,
  className,
  testId,
}) => {
  return (
    <Tag
      style={{
        display,
        ...widthProps,
        ...heightProps,
        ...paddingProps,
        ...marginProps,
      }}
      className={clsx("usy-box-container", className)}
      data-testid={testId}
    >
      {children}
    </Tag>
  );
};
