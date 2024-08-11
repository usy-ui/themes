import { FC, ReactNode, useEffect } from "react";

import clsx from "clsx";
import { createPortal } from "react-dom";

import { useMounted } from "@src/hooks/useMounted";

import { CommonCompProps } from "../../types/common-comp.props";
import { CloseIcon } from "../Icon";

type ModalProps = {
  isOpen: boolean;
  title?: ReactNode;
  maxWidth?: string;
  containerElement?: HTMLElement;
  children: ReactNode;
  onClose?: () => void;
  zIndex?: number;
} & CommonCompProps;

export const Modal: FC<ModalProps> = ({
  name = "modal",
  isOpen,
  title,
  maxWidth = "500px",
  containerElement,
  children,
  onClose,
  zIndex,
  className,
  testId = name,
}) => {
  const { isMounted } = useMounted();

  const enableScroll = () => {
    document.body.style.overflow = "auto";
  };

  const disableScroll = () => {
    document.body.style.overflow = "hidden";
  };

  useEffect(() => {
    return () => {
      enableScroll();
    };
  }, []);

  useEffect(() => {
    isOpen ? disableScroll() : enableScroll();
  }, [isOpen]);

  const renderModal = () => {
    const renderCloseIcon = () => {
      if (typeof onClose !== "function") {
        return null;
      }

      return (
        <CloseIcon
          onClick={onClose}
          className="header-close"
          data-testid={`${testId}-header-close`}
        />
      );
    };

    const renderTitle = () => {
      if (!title) {
        return null;
      }

      return (
        <h4 className="header-title" data-testid={`${testId}-header-title`}>
          {title}
        </h4>
      );
    };

    return (
      <div className={clsx("usy-modal-overlay")} style={{ zIndex }}>
        <div
          className={clsx("usy-modal-container", className)}
          style={{ maxWidth }}
          data-testid={testId}
        >
          {renderCloseIcon()}
          {renderTitle()}
          {children}
        </div>
      </div>
    );
  };

  return isMounted && isOpen
    ? createPortal(renderModal(), containerElement || document.body)
    : null;
};
