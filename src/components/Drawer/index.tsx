import { FC, ReactNode, useEffect } from "react";

import clsx from "clsx";
import { createPortal } from "react-dom";

import { useMounted } from "@src/hooks/useMounted";
import { usyZIndex } from "@src/styles";

import { CommonCompProps } from "../../types/common-comp.props";

export { DrawerHeader } from "./Header";
export { DrawerContent } from "./Content";
export { DrawerFooter } from "./Footer";

type DrawerProps = {
  isOpen?: boolean;
  side?: "left" | "right";
  maxWidth?: string;
  header?: ReactNode;
  children: ReactNode;
  footer?: ReactNode;
  containerElement?: HTMLElement;
  zIndex?: number;
} & CommonCompProps;

export const Drawer: FC<DrawerProps> = ({
  name = "drawer",
  isOpen,
  side = "right",
  maxWidth = "480px",
  header,
  children,
  footer,
  containerElement,
  zIndex = usyZIndex[800],
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

  const renderDrawer = () => {
    return (
      <div
        className={clsx("usy-drawer-overlay", `pos-${side}`)}
        style={{ zIndex }}
        data-testid={`${testId}-overlay`}
      >
        <div
          className={clsx("usy-drawer-container", className)}
          style={{ maxWidth }}
          data-testid={testId}
        >
          {header}
          {children}
          {footer}
        </div>
      </div>
    );
  };

  return isMounted
    ? createPortal(renderDrawer(), containerElement || document.body)
    : null;
};
