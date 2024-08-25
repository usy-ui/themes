import { FC, ReactNode } from "react";

import clsx from "clsx";

import { CommonCompProps } from "../../../../@types";

export type MenuItem = {
  label: ReactNode;
  onClick?: () => void;
};

type MenuItemProps = MenuItem & CommonCompProps;

export const MenuItem: FC<MenuItemProps> = ({
  name = "dropdown-menu-ite,",
  className,
  testId = name,
  ...item
}) => {
  return (
    <li
      onClick={item.onClick}
      aria-hidden="true"
      className={clsx("usy-dropdown-menu-item-container", className)}
      data-testid={testId}
    >
      {item.label}
    </li>
  );
};
