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
  CommonCompProps,
} from "../../@types";

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
  color = "dark-9",
  size = "medium",
  align = "left",
  children,
  className,
  testId = name,
}) => {
  const colorInHex = useUsyColor(color);
  const innerSize = useMemo(
    () => (!size && ["p", "span", "label"].includes(Tag) ? "medium" : size),
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
