import { CSSProperties, FC, ReactNode, useMemo } from "react";

import clsx from "clsx";

import { ExtraCompProps } from "../../types/extra-comp.props";

import { getColor, getTypeCss } from "./Badge.utils";

export type BadgeType = "filled" | "outline" | "normal";
export type BadgeSize = "small" | "medium" | "large";
export type BadgeColor =
  | "primary"
  | "primary-light"
  | "primary-dark"
  | "random"
  | CSSProperties["color"];

type BadgeProps = {
  type?: BadgeType;
  size?: BadgeSize;
  color?: BadgeColor;
  children: ReactNode;
} & ExtraCompProps;

export const Badge: FC<BadgeProps> = ({
  name = "badge",
  type = "outline",
  size = "medium",
  color = "primary",
  children,
  className,
  testId = name,
}) => {
  const colorInHex = useMemo(() => getColor(color), [color]);
  const typeCss = getTypeCss(colorInHex, type);

  return (
    <div
      className={clsx(
        "usy-badge-container",
        {
          [`size-${size}`]: Boolean(size),
        },
        className
      )}
      style={{ ...typeCss }}
      data-testid={testId}
    >
      {children}
    </div>
  );
};
