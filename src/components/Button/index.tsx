import { ReactNode, forwardRef } from "react";

import clsx from "clsx";

import { BaseColor, BaseSize, BaseVariant } from "../../types/base.type";
import { CommonCompProps } from "../../types/common-comp.props";
import SvgLoadingCircle from "../Icon/LoadingCircle";

export type ButtonType = "button" | "submit";
export type ButtonVariant = BaseVariant | "normal" | "invisible";
export type ButtonColor = BaseColor;
export type ButtonSize = BaseSize;

export type ButtonProps = {
  type?: ButtonType;
  width?: string;
  variant?: ButtonVariant;
  color?: ButtonColor;
  size?: ButtonSize;
  isLoading?: boolean;
  iconLeft?: ReactNode;
  iconRight?: ReactNode;
  isDisabled?: boolean;
  isBlock?: boolean;
  children: ReactNode;
  onClick?: () => void;
} & CommonCompProps;

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  function Button(
    {
      name = "button",
      type = "button",
      width = "unset",
      variant = "normal",
      color = "primary",
      size = "medium",
      isLoading = false,
      isDisabled = false,
      isBlock = false,
      iconLeft,
      iconRight,
      children,
      onClick,
      className,
      testId = name,
    },
    ref
  ) {
    const handleClick = () => {
      if (isDisabled || isLoading || typeof onClick !== "function") {
        return;
      }

      onClick();
    };

    const sizeClassName = `size-${size}`;
    const variantClassName = `variant-${variant}`;

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
          width="30px"
          height="30px"
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
            [sizeClassName]: Boolean(size),
            [variantClassName]: Boolean(variant),
            disabled: isDisabled,
            block: isBlock,
          },
          className
        )}
        style={{ width }}
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
