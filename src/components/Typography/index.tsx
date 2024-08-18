import { FC, ReactNode, useMemo } from "react";

import clsx from "clsx";

import { usyColor } from "@src/styles";
import { camelCase } from "@src/utils";

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
  const sizeClassName = `size-${size}`;
  const weightClassName = `weight-${weight}`;
  const camelCaseColor = useMemo(
    () => camelCase(color).replace("-", ""),
    [color]
  ) as keyof typeof usyColor;

  return (
    <Tag
      className={clsx(
        "usy-typography-container",
        {
          [sizeClassName]: Boolean(size),
          [weightClassName]: Boolean(weight),
          "no-margin": noMargin,
        },
        className
      )}
      style={{ color: usyColor[camelCaseColor], textAlign: align }}
      data-testid={testId}
    >
      {children}
    </Tag>
  );
};
