import { FC } from "react";

import clsx from "clsx";

import { useRandomColor } from "@src/hooks/useRandomColor";
import { usyColors } from "@src/styles";

import { ExtraCompProps } from "../../types/extra-comp.props";

type AvatarProps = {
  url: string;
  alt: string;
  fallback?: string;
  variant?: "circle" | "rounded";
  size?: "extra-small" | "small" | "medium" | "large" | "extra-large";
  onClick?: () => void;
} & ExtraCompProps;

export const Avatar: FC<AvatarProps> = ({
  name = "avatar",
  url,
  alt,
  fallback = "A",
  variant = "rounded",
  size = "medium",
  onClick,
  className,
  testId = name,
}) => {
  const { color: bgColor } = useRandomColor();
  const sizeClassName = `size-${size}`;
  const variantClassName = `variant-${variant}`;

  return (
    <div
      role="button"
      aria-hidden="true"
      title={url ? alt : fallback}
      onClick={onClick}
      className={clsx(
        "usy-avatar-container",
        {
          [sizeClassName]: Boolean(size),
          [variantClassName]: Boolean(variant),
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
      {url ? (
        <img src={url} alt={alt} className="image" />
      ) : (
        fallback[0].toUpperCase()
      )}
    </div>
  );
};
