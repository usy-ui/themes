import { FC } from "react";

import { BaseTag } from "../../..//@types/base.types";
import { CommonCompProps } from "../../../@types/common-comp.props";
import { CommonBoxFlexProps } from "../Box";
import clsx from "clsx";

type PureFlexProps = {
  tag?: BaseTag;
  display?: "flex" | "inline-flex";
  direction?: "row" | "column" | "row-reverse" | "column-reverse";
  justifyContent?: "flex-start" | "center" | "flex-end" | "space-between";
  alignItems?: "flex-start" | "center" | "flex-end" | "baseline" | "stretch";
  grow?: number;
  shrink?: number;
  wrap?: "nowrap" | "wrap" | "wrap-reverse";
  gap?: string;
};

type FlexProps = CommonBoxFlexProps & PureFlexProps & CommonCompProps;

export const Flex: FC<FlexProps> = ({
  tag: Tag = "div",
  display = "flex",
  direction,
  justifyContent,
  alignItems,
  grow,
  shrink,
  wrap,
  gap,
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
        flexDirection: direction,
        flexGrow: grow,
        flexShrink: shrink,
        justifyContent,
        alignItems,
        flexWrap: wrap,
        gap,
        ...widthProps,
        ...heightProps,
        ...paddingProps,
        ...marginProps,
      }}
      className={clsx("usy-flex-container", className)}
      data-testid={testId}
    >
      {children}
    </Tag>
  );
};
