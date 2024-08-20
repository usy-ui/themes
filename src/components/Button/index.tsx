import { CSSProperties, ReactNode, forwardRef } from "react";

import clsx from "clsx";

import { usySpacing } from "@src/styles";

import { BaseRadius, BaseSize, BaseVariant } from "../../@types/base.types";
import { CommonCompProps } from "../../@types/common-comp.props";
import SvgLoadingCircle from "../Icon/LoadingCircle";

export type ButtonType = "button" | "submit";
export type ButtonVariant = BaseVariant | "normal" | "danger" | "invisible";
export type ButtonSize = BaseSize;

export type ButtonProps = {
  type?: ButtonType;
  width?: string;
  variant?: ButtonVariant;
  size?: ButtonSize;
  radius?: BaseRadius;
  isLoading?: boolean;
  iconLeft?: ReactNode;
  iconRight?: ReactNode;
  isDisabled?: boolean;
  noSole?: boolean;
  children: ReactNode;
  onClick?: () => void;
} & CommonCompProps;

const radiusCoeffBaseOnSize: Record<BaseSize, number> = {
  small: 1,
  medium: 1.1,
  large: 1.2,
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  function Button(
    {
      name = "button",
      type = "button",
      width = "unset",
      variant = "normal",
      size = "medium",
      radius = "small",
      isLoading = false,
      isDisabled = false,
      noSole = false,
      iconLeft,
      iconRight,
      children,
      onClick,
      className,
      testId = name,
    },
    ref
  ) {
    const cssVariables = {
      "--usy-button-radius-coeff": radiusCoeffBaseOnSize[size],
    } as CSSProperties;

    const handleClick = () => {
      if (isDisabled || isLoading || typeof onClick !== "function") {
        return;
      }

      onClick();
    };

    /**
     * Render
     */

    const renderIconLeft = () =>
      iconLeft && (
        <span className="left-icon" data-testid={`${testId}-icon-left`}>
          {iconLeft}
        </span>
      );

    const renderIconRight = () =>
      iconRight && (
        <span className="right-icon" data-testid={`${testId}-icon-right`}>
          {iconRight}
        </span>
      );

    const renderLoading = () =>
      isLoading && (
        <SvgLoadingCircle
          width={usySpacing.px28}
          height={usySpacing.px28}
          className="loading-icon"
          data-testid={`${testId}-loading-icon`}
        />
      );

    return (
      <button
        ref={ref}
        type={type}
        className={clsx(
          "usy-button-container",
          {
            [`size-${size}`]: Boolean(size),
            [`variant-${variant}`]: Boolean(variant),
            [`radius-${radius}`]: Boolean(radius),
            "no-sole": Boolean(noSole),
            disabled: isDisabled,
            loading: isLoading,
          },
          className
        )}
        style={{ ...cssVariables, width }}
        onClick={handleClick}
        data-testid={testId}
      >
        {renderIconLeft()}
        {renderLoading()}
        {children}
        {renderIconRight()}
      </button>
    );
  }
);
