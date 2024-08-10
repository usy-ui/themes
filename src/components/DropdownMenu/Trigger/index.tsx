import { FC, ReactNode } from "react";

import clsx from "clsx";

import { AngleDownIcon } from "@src/components/Icon";

import { ExtraCompProps } from "../../../types/extra-comp.props";

type PureTriggerProps = {
  hasBorder?: boolean;
  children: ReactNode;
};

type TriggerProps = PureTriggerProps & ExtraCompProps;

export const Trigger: FC<TriggerProps> = ({
  name = "dropdown-menu-trigger",
  children,
  hasBorder,
  className,
  testId = name,
}) => {
  return (
    <div
      className={clsx(
        "usy-dropdown-trigger-container",
        {
          "has-border": hasBorder,
        },
        className
      )}
      data-testid={testId}
    >
      {children}
      <AngleDownIcon />
    </div>
  );
};
