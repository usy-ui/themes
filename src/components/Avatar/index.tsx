import { forwardRef } from "react";

import clsx from "clsx";

import { useRandomColor } from "@src/hooks/useRandomColor";
import { usyColors } from "@src/styles";

import { BaseExtraSize, BaseShape, BaseSize } from "../../types/base.type";
import { CommonCompProps } from "../../types/common-comp.props";

type AvatarProps = {
  url: string;
  alt: string;
  fallback?: string;
  shape?: BaseShape;
  size?: BaseSize | BaseExtraSize;
  onClick?: () => void;
} & CommonCompProps;

export const Avatar = forwardRef<HTMLDivElement, AvatarProps>(function Avatar(
  {
    name = "avatar",
    url,
    alt,
    fallback = "A",
    shape = "rounded",
    size = "medium",
    onClick,
    className,
    testId = name,
  },
  ref
) {
  const { color: bgColor } = useRandomColor();
  const sizeClassName = `size-${size}`;
  const shapeClassName = `shape-${shape}`;

  return (
    <div
      ref={ref}
      aria-hidden="true"
      title={url ? alt : fallback}
      onClick={onClick}
      className={clsx(
        "usy-avatar-container",
        {
          [sizeClassName]: Boolean(size),
          [shapeClassName]: Boolean(shape),
        },
        className
      )}
      style={{
        backgroundColor: bgColor,
        color: usyColors.white,
        cursor: onClick ? "pointer" : undefined,
      }}
      data-testid={testId}
    >
      {url ? <img src={url} alt={alt} className="image" /> : fallback}
    </div>
  );
});
