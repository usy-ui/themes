import { CSSProperties, forwardRef, ReactNode } from "react";

import clsx from "clsx";

import { useColorCode } from "@src/hooks/useColorCode";

import { BaseColor, BaseSize, BaseVariant } from "../../@types/base.types";
import { CommonCompProps } from "../../@types/common-comp.props";

export type BadgeVariant = BaseVariant;
export type BadgeSize = BaseSize;
export type BadgeColor = BaseColor | "random";

type BadgeProps = {
  variant?: BadgeVariant;
  size?: BadgeSize;
  color?: BadgeColor;
  children: ReactNode;
} & CommonCompProps;

export const Badge = forwardRef<HTMLDivElement, BadgeProps>(function Badge(
  {
    name = "badge",
    variant = "outline",
    size = "medium",
    color = "primary",
    children,
    className,
    testId = name,
  },
  ref
) {
  const { colorMemo } = useColorCode(color);
  const cssVariables = {
    "--badge-color": colorMemo,
  } as CSSProperties;

  return (
    <div
      ref={ref}
      className={clsx(
        "usy-badge-container",
        {
          [`variant-${variant}`]: Boolean(variant),
          [`size-${size}`]: Boolean(size),
        },
        className
      )}
      style={{ ...cssVariables }}
      data-testid={testId}
    >
      {children}
    </div>
  );
});
