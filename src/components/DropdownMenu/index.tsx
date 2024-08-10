import {
  Children,
  cloneElement,
  FC,
  ReactElement,
  ReactNode,
  useState,
} from "react";

import { useOutsideClick } from "@src/hooks/useOutsideClick";

import { ExtraCompProps } from "../../types/extra-comp.props";

import { MenuOverlay } from "./MenuOverlay";
import { MenuItem } from "./MenuOverlay/MenuItem";
import { MenuSeparator } from "./MenuOverlay/MenuSeparator";
import { Trigger } from "./Trigger";

type PureDropdownMenuProps = {
  isOpen?: boolean;
  children: ReactElement[];
};

type DropdownMenuProps = PureDropdownMenuProps & ExtraCompProps;

const DropdownMenu: FC<DropdownMenuProps> = ({
  name = "dropdown-menu",
  isOpen: initOpen,
  children,
  testId = name,
}) => {
  const [isOpen, setIsOpen] = useState(initOpen || false);

  const handleOutsideClick = () => {
    setIsOpen(false);
  };

  const { elementRef, triggerRef } = useOutsideClick(handleOutsideClick);
  const toggleMenu = () => setIsOpen(!isOpen);

  const renderChildren = () => {
    const enhancedChildren: ReactNode[] = [];
    Children.forEach(children, (child) => {
      if (child.type === Trigger) {
        enhancedChildren.push(
          <div
            key="trigger"
            onClick={toggleMenu}
            ref={triggerRef}
            aria-hidden="true"
          >
            {child}
          </div>
        );
      }

      if (child.type === MenuOverlay && isOpen) {
        enhancedChildren.push(
          cloneElement(child, {
            key: "menu-overlay",
            ref: elementRef,
          })
        );
      }
    });

    return enhancedChildren;
  };

  return (
    <div className="usy-dropdown-menu-container" data-testid={testId}>
      {renderChildren()}
    </div>
  );
};

export {
  DropdownMenu,
  Trigger as DropdownMenuTrigger,
  MenuOverlay as DropdownMenuOverlay,
  MenuSeparator as DropdownMenuSeparator,
  MenuItem as DropdownMenuItem,
};
