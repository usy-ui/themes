import { FC, ReactNode, useMemo } from "react";

import clsx from "clsx";

import { useUsyColor } from "@src/hooks";

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
  color?: BaseColor | "random";
  size?: TypographySize;
  align?: TypographyAlign;
  children: ReactNode;
} & CommonCompProps;

export const Typography: FC<TypographyProps> = ({
  name = "typography",
  tag: Tag = "p",
  weight = "medium",
  color = "black",
  size,
  align = "left",
  children,
  className,
  testId = name,
}) => {
  const colorInHex = useUsyColor(color);
  const innerSize = useMemo(
    () => (!size && ["p", "span", "label"].includes(Tag) ? "small" : size),
    [size, Tag]
  );

  return (
    <Tag
      className={clsx(
        "usy-typography-container",
        {
          [`size-${innerSize}`]: Boolean(innerSize),
          [`weight-${weight}`]: Boolean(weight),
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
