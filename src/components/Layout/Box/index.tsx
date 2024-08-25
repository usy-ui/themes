import { FC, ReactNode } from "react";

import clsx from "clsx";

import { BaseSemanticTag } from "../../..//@types/base.types";
import { CommonCompProps } from "../../../@types/common-comp.props";
import {
  WidthProps,
  HeightProps,
  MarginProps,
  PaddingProps,
} from "../../../@types/styles.props";

export type CommonBoxFlexProps = {
  tag?: BaseSemanticTag;
  children: ReactNode;
  id?: string;
};

export type PureBoxProps = {
  display?: "block" | "inline-block";
};

type BoxProps = CommonBoxFlexProps &
  PureBoxProps &
  WidthProps &
  HeightProps &
  MarginProps &
  PaddingProps &
  CommonCompProps;

export const Box: FC<BoxProps> = ({
  tag: Tag = "div",
  display,
  widthProps,
  heightProps,
  paddingProps,
  marginProps,
  children,
  className,
  id,
  name = "box",
  testId = name,
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
      id={id}
      className={clsx("usy-box-container", className)}
      data-testid={testId}
    >
      {children}
    </Tag>
  );
};
