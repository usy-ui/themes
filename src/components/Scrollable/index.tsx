import { FC, ReactNode } from "react";

import clsx from "clsx";

import { usySpacing } from "@src/styles";

import { BaseTag } from "../..//@types/base.types";
import { CommonCompProps } from "../../@types/common-comp.props";
import {
  HeightProps,
  WidthProps,
  MarginProps,
  PaddingProps,
} from "../../@types/styles.props";

type PureScrollableProps = {
  tag?: BaseTag;
  widthProps?: WidthProps;
  heightProps?: HeightProps;
  paddingProps?: PaddingProps;
  marginProps?: MarginProps;
  overflowX?: "hidden" | "auto" | "scroll";
  overflowY?: "hidden" | "auto" | "scroll";
  children?: ReactNode;
};

type ScrollableProps = PureScrollableProps & CommonCompProps;

export const Scrollable: FC<ScrollableProps> = ({
  tag: Tag = "div",
  name = "scrollable",
  widthProps,
  heightProps,
  paddingProps,
  marginProps,
  overflowX = "hidden",
  overflowY = "auto",
  children,
  className,
  testId = name,
}) => {
  return (
    <Tag
      className={clsx("usy-scrollable-container", className)}
      style={{
        ...(widthProps || { width: "100%" }),
        ...heightProps,
        ...(paddingProps || { paddingRight: usySpacing.px10 }),
        ...marginProps,
        overflowX: overflowX,
        overflowY: overflowY,
      }}
      data-testid={testId}
    >
      {children}
    </Tag>
  );
};
