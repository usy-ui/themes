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
  scrollType?: "vertical" | "horizontal" | "both";
  widthProps?: WidthProps;
  heightProps?: HeightProps;
  paddingProps?: PaddingProps;
  marginProps?: MarginProps;
  children?: ReactNode;
};

type ScrollableProps = PureScrollableProps & CommonCompProps;

export const Scrollable: FC<ScrollableProps> = ({
  tag: Tag = "div",
  scrollType = "vertical",
  name = "scrollable",
  widthProps,
  heightProps,
  paddingProps,
  marginProps,
  children,
  className,
  testId = name,
}) => {
  return (
    <Tag
      className={clsx(
        "usy-scrollable-container",
        {
          [`scroll-${scrollType}`]: Boolean(scrollType),
        },
        className
      )}
      style={{
        ...(widthProps || { width: "100%" }),
        ...heightProps,
        ...(paddingProps || { paddingRight: usySpacing.px10 }),
        ...marginProps,
      }}
      data-testid={testId}
    >
      {children}
    </Tag>
  );
};
