import { forwardRef, ReactNode } from "react";

import clsx from "clsx";

import { useUsyColor } from "@src/hooks/useUsyColor";
import { usyColor } from "@src/styles";

import {
  BaseColor,
  BaseExtraSize,
  BaseRadius,
  BaseSize,
} from "../../@types/base.types";
import { CommonCompProps } from "../../@types/common-comp.props";

type AvatarProps = {
  url: string;
  size?: BaseSize | BaseExtraSize;
  color?: BaseColor | "random";
  radius?: BaseRadius;
  fallback?: ReactNode;
  imgAlt?: string;
  onClick?: () => void;
} & CommonCompProps;

export const Avatar = forwardRef<HTMLDivElement, AvatarProps>(function Avatar(
  {
    name = "avatar",
    url,
    size = "medium",
    color = "black",
    radius = "small",
    fallback = "A",
    imgAlt,
    onClick,
    className,
    testId = name,
  },
  ref
) {
  const bgColor = useUsyColor(color);

  return (
    <div
      ref={ref}
      aria-hidden="true"
      title={imgAlt}
      onClick={onClick}
      className={clsx(
        "usy-avatar-container",
        {
          [`size-${size}`]: Boolean(size),
          [`radius-${radius}`]: Boolean(radius),
        },
        className
      )}
      style={{
        color: usyColor.white,
        backgroundColor: bgColor,
        cursor: onClick ? "pointer" : undefined,
      }}
      data-testid={testId}
    >
      {url ? <img src={url} alt={imgAlt} className="image" /> : fallback}
    </div>
  );
});
