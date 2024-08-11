import { FC, ReactNode, useState } from "react";

import clsx from "clsx";

import { CommonCompProps } from "../../types/common-comp.props";
import { AngleDownIcon } from "../Icon";

export type ToggleSectionProps = {
  title: ReactNode;
  isExpand?: boolean;
  maxWidth?: string;
  maxContentHeight?: string;
  children: ReactNode;
  onToggle?: (isExpand: boolean) => void;
} & CommonCompProps;

export const ToggleSection: FC<ToggleSectionProps> = ({
  name = "toggle-section",
  title,
  isExpand: isDefExpand = false,
  maxWidth,
  maxContentHeight = "unset",
  children,
  onToggle,
  className,
  testId = name,
}) => {
  const [isExpand, setIsExpand] = useState(isDefExpand);

  const handleToggle = () => {
    setIsExpand(!isExpand);
    onToggle?.(!isExpand);
  };

  return (
    <div
      className={clsx(
        "usy-toggle-section-container",
        {
          "is-expanded": isExpand,
        },
        className
      )}
      style={{ maxWidth }}
      data-testid={testId}
    >
      <div
        className="usy-toggle-section-header"
        data-testid={`${testId}-header`}
      >
        <label className="title" data-testid={`${testId}-header-title`}>
          {title}
        </label>
        <AngleDownIcon
          onClick={handleToggle}
          className={clsx("arrow-icon", {
            "is-expanded": isExpand,
          })}
          data-testid={`${testId}-header-toggle`}
        />
      </div>
      <div
        className={clsx("usy-toggle-section-content")}
        style={{ maxHeight: maxContentHeight }}
        data-testid={`${testId}-content`}
      >
        {children}
      </div>
    </div>
  );
};
