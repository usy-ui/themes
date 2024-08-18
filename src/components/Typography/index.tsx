import { FC, ReactNode } from "react";

import clsx from "clsx";

import { useUsyColor } from "@src/hooks/useUsyColor";

import {
  BaseColor,
  BaseExtraSize,
  BaseGigantSize,
  BaseSize,
  BaseTypographyTag,
  BaseTypographyWeight,
} from "../../@types/base.types";
import { CommonCompProps } from "../../@types/common-comp.props";

export type TypographySize = BaseSize | BaseExtraSize | BaseGigantSize;
type TypographyAlign = "left" | "center" | "right" | "justify";

type TypographyProps = {
  tag?: BaseTypographyTag;
  weight?: BaseTypographyWeight;
  color?: BaseColor;
  size?: TypographySize;
  align?: TypographyAlign;
  noMargin?: boolean;
  children: ReactNode;
} & CommonCompProps;

export const Typography: FC<TypographyProps> = ({
  name = "typography",
  tag: Tag = "p",
  weight = "medium",
  color = "black",
  size = "medium",
  align = "left",
  noMargin = false,
  children,
  className,
  testId = name,
}) => {
  const colorInHex = useUsyColor(color);

  return (
    <Tag
      className={clsx(
        "usy-typography-container",
        {
          [`size-${size}`]: Boolean(size),
          [`weight-${weight}`]: Boolean(weight),
          "no-margin": noMargin,
        },
        className
      )}
      style={{ color: colorInHex, textAlign: align }}
      data-testid={testId}
    >
      {children}
    </Tag>
  );
};
