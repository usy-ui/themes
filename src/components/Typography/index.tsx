import { FC, ReactNode } from "react";

import clsx from "clsx";

import { BaseExtraSize, BaseSize } from "@src/@types/base.types";

import { CommonCompProps } from "../../@types/common-comp.props";

type TypographyTag =
  | "small"
  | "span"
  | "label"
  | "p"
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "h5"
  | "h6";

type TypographySize = BaseSize | BaseExtraSize;

type TypographyWeight =
  | "thin"
  | "light"
  | "semilight"
  | "normal"
  | "semibold"
  | "bold"
  | "heavy";

type TypographyAlign = "left" | "center" | "right" | "justify";

type TypographyProps = {
  tag?: TypographyTag;
  size?: TypographySize;
  weight?: TypographyWeight;
  align?: TypographyAlign;
  noMargin?: boolean;
  children: ReactNode;
} & CommonCompProps;

export const Typography: FC<TypographyProps> = ({
  name = "typography",
  tag: Tag = "p",
  size = "medium",
  weight = "medium",
  align = "left",
  noMargin = false,
  children,
  className,
  testId = name,
}) => {
  const sizeClassName = `size-${size}`;
  const weightClassName = `weight-${weight}`;
  const alignClassName = `align-${align}`;

  return (
    <Tag
      className={clsx(
        "usy-typography-container",
        {
          [sizeClassName]: Boolean(size),
          [weightClassName]: Boolean(weight),
          [alignClassName]: Boolean(align),
          "no-margin": noMargin,
        },
        className
      )}
      data-testid={testId}
    >
      {children}
    </Tag>
  );
};
