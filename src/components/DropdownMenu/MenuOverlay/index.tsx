import { Children, cloneElement, forwardRef, ReactElement } from "react";

import clsx from "clsx";

import { usyZIndex } from "@src/styles";

import { CommonCompProps } from "../../../@types/common-comp.props";

type PureMenuOverlayProps = {
  zIndex?: number;
  children: ReactElement[];
};

type MenuOverlayProps = PureMenuOverlayProps & CommonCompProps;

export const MenuOverlay = forwardRef<HTMLDivElement, MenuOverlayProps>(
  function MenuOverlay(
    {
      name = "dropdown-menu-overlay",
      children,
      zIndex = usyZIndex.latest,
      className,
      testId = name,
    },
    ref
  ) {
    return (
      <div
        className={clsx("usy-dropdown-menu-overlay-container", className)}
        style={{ zIndex }}
        data-testid={testId}
        ref={ref}
      >
        <ul>
          {Children.map(children, (child, index) => {
            return cloneElement(child, {
              key: `menu-item-${index}`,
            });
          })}
        </ul>
      </div>
    );
  }
);

MenuOverlay.displayName = "MenuOverlay";
