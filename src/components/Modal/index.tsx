import { FC, ReactNode, useCallback, useEffect } from "react";

import clsx from "clsx";
import { createPortal } from "react-dom";

import { useMounted, useOutsideClick } from "@src/hooks";

import { CommonCompProps } from "../../@types/common-comp.props";
import { WidthProps } from "../../@types/styles.props";
import { CloseIcon } from "../Icon";

type ModalProps = {
  title?: ReactNode;
  widthProps?: WidthProps;
  preventOutsideClose?: boolean;
  containerElement?: HTMLElement;
  children: ReactNode;
  onClose?: () => void;
  zIndex?: number;
} & CommonCompProps;

export const Modal: FC<ModalProps> = ({
  name = "modal",
  title,
  widthProps,
  preventOutsideClose = false,
  containerElement,
  children,
  onClose,
  zIndex,
  className,
  testId = name,
}) => {
  const { isMounted } = useMounted();
  const handleOutsideClick = () => {
    onClose?.();
  };

  const { elementRef } = useOutsideClick(
    handleOutsideClick,
    preventOutsideClose
  );

  const enableScroll = useCallback(() => {
    document.body.style.overflow = "auto";
  }, []);

  const disableScroll = useCallback(() => {
    document.body.style.overflow = "hidden";
  }, []);

  useEffect(() => {
    disableScroll();

    return () => {
      enableScroll();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  /**
   * Render
   */

  const renderModal = () => {
    const renderCloseIcon = () => {
      if (typeof onClose !== "function") {
        return null;
      }

      return (
        <CloseIcon
          className="header-close"
          onClick={onClose}
          data-testid={`${testId}-header-close`}
        />
      );
    };

    const renderTitle = () =>
      title && (
        <h4 className="header-title" data-testid={`${testId}-header-title`}>
          {title}
        </h4>
      );

    return (
      <div className={clsx("usy-modal-overlay")} style={{ zIndex }}>
        <div
          ref={elementRef}
          className={clsx("usy-modal-container", className)}
          style={{ ...(widthProps || { maxWidth: "500px" }) }}
          data-testid={testId}
        >
          {renderCloseIcon()}
          {renderTitle()}
          {children}
        </div>
      </div>
    );
  };

  return isMounted
    ? createPortal(renderModal(), containerElement || document.body)
    : null;
};
