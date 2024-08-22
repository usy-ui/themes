import { FC, ReactNode } from "react";

import clsx from "clsx";

import { BasePosition } from "../../@types/base.types";
import { CommonCompProps } from "../../@types/common-comp.props";

type TooltipProps = {
  content: string;
  position?: BasePosition;
  children: ReactNode;
} & CommonCompProps;

export const Tooltip: FC<TooltipProps> = ({
  name = "tooltip",
  content,
  position = "top",
  children,
  className,
  testId = name,
}) => {
  return (
    <div
      className={clsx(
        "usy-tooltip-container",
        {
          [`position-${position}`]: Boolean(position),
        },
        className
      )}
      data-testid={testId}
    >
      <div className="tooltip-container" data-testid={`${testId}-content`}>
        {content}
      </div>
      {children}
    </div>
  );
};
