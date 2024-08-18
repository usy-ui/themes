import { CSSProperties, forwardRef, ReactNode } from "react";

import clsx from "clsx";

import { useUsyColor } from "@src/hooks";

import {
  BaseColor,
  BaseRadius,
  BaseSize,
  BaseVariant,
} from "../../@types/base.types";
import { CommonCompProps } from "../../@types/common-comp.props";

type BadgeProps = {
  variant?: BaseVariant;
  size?: BaseSize;
  color?: BaseColor | "random";
  radius?: BaseRadius;
  children: ReactNode;
} & CommonCompProps;

const radiusCoeffBaseOnSize: Record<BaseSize, number> = {
  small: 1,
  medium: 1.1,
  large: 1.2,
};

export const Badge = forwardRef<HTMLDivElement, BadgeProps>(function Badge(
  {
    name = "badge",
    variant = "outline",
    size = "medium",
    color = "primary",
    radius = "small",
    children,
    className,
    testId = name,
  },
  ref
) {
  const colorInHex = useUsyColor(color);
  const cssVariables = {
    "--badge-color": colorInHex,
    "--badge-radius-coeff": radiusCoeffBaseOnSize[size],
  } as CSSProperties;

  return (
    <div
      ref={ref}
      className={clsx(
        "usy-badge-container",
        {
          [`variant-${variant}`]: Boolean(variant),
          [`size-${size}`]: Boolean(size),
          [`radius-${radius}`]: Boolean(radius),
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
